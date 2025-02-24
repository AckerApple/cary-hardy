const fs = require("fs-extra");
const path = require("path");

/**
 * Recursively finds all files in a directory that match a given pattern.
 */
async function findFiles(dir, pattern) {
    let results = [];
    const files = await fs.readdir(dir, { withFileTypes: true });

    for (const file of files) {
        const fullPath = path.join(dir, file.name);
        if (file.isDirectory()) {
            results = results.concat(await findFiles(fullPath, pattern)); // Recursive search
        } else if (file.name.includes(pattern)) {
            results.push(fullPath);
        }
    }
    return results;
}

/**
 * Main function to merge HTML files.
 */
async function mergeHtmlFiles(templatePath, targetDir, pattern) {
    try {
        // Read the template file
        const template = await fs.readFile(templatePath, "utf8");

        // Find all matching source files
        const srcFiles = await findFiles(targetDir, pattern);

        if (srcFiles.length === 0) {
            console.log(`No files found with pattern "${pattern}" in ${targetDir}`);
            return;
        }

        // Process each source file
        for (const srcFile of srcFiles) {
            const content = await fs.readFile(srcFile, "utf8");
            const output = template.replace("${BODY}", content);
            
            // Generate output filename (remove `.src` from the name)
            const outputFile = srcFile.replace(pattern, ".html");

            // Write the merged output file
            await fs.writeFile(outputFile, output);
            console.log(`Generated: ${outputFile}`);
        }

        console.log("Merge process completed successfully!");
    } catch (error) {
        console.error("Error processing files:", error);
    }
}

// Command-line arguments
const [,, templatePath, targetDir, pattern] = process.argv;

if (!templatePath || !targetDir || !pattern) {
    console.error("Usage: node mergeHtmlFiles.js merge.html ./ .src.html");
    process.exit(1);
}

// Run the merge function
mergeHtmlFiles(templatePath, targetDir, pattern);
