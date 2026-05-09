# Firebase Rules

This repo is wired to manage Firestore security rules locally for the Firebase project `cardy-hardy`.

## Files

- `.firebaserc` maps the default Firebase project to `cardy-hardy`.
- `firebase.json` points Firestore rules deployment at `firestore.rules`.
- `firestore.rules` is the local source of truth for Firestore rules.

## Workflow

1. Edit `firestore.rules`.
2. Validate syntax with a dry run:

   ```sh
   npm run firestore:rules:check
   ```

3. Deploy rules only:

   ```sh
   npm run firestore:rules:deploy
   ```

## Important

The current `firestore.rules` file is intentionally locked down until the current production rules are pasted into it. The deploy script refuses to deploy while the placeholder marker is present.

## Games And Current Games Rules To Merge

The public lineup page needs read access to the canonical `games` collection plus visible documents in `currentGames`, and admins need write access. Merge this into the production rules once the current rules have been copied into `firestore.rules`:

```js
function isSignedIn() {
  return request.auth != null;
}

function signedInEmail() {
  return isSignedIn() && request.auth.token.email is string
    ? lower(request.auth.token.email)
    : '';
}

function isAdmin() {
  return signedInEmail() in get(/databases/$(database)/documents/admins/list).data.items;
}

match /games/{gameId} {
  allow read: if true;
  allow create, update, delete: if isAdmin();
}

match /manufacturers/{manufacturerId} {
  allow read: if true;
  allow create, update, delete: if isAdmin();
}

match /gameRatings/{gameId} {
  allow read: if resource.data.isVisible == true || isAdmin();
  allow create, update, delete: if isAdmin();
}

match /currentGames/{gameId} {
  allow read: if resource.data.isVisible == true || isAdmin();
  allow create, update, delete: if isAdmin();
}
```

If the production rules already have equivalent admin helper functions, reuse those instead of duplicating the helpers.
