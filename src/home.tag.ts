import { ClockComponent } from "./clock/clock.tag"
import { iframe, img, a, br, div, h2, small, style, tag, callback, noElement } from "taggedjs"
import { loadNextMeetupDate } from "./firebase"

let meetupLoaded = false

export const homeTag = tag(() => (
  clickCount = 0,
  showSticker = true,
  nextMeetupDate = Date.now() - 1000,
  refreshMeetup = callback(() => {}),
  __ = setTimeout(callback(() => showSticker = false), 5000),
  _load = !meetupLoaded && (() => {
    meetupLoaded = true
    tag.promise = loadNextMeetupDate()
      .then((loadedDate) => {
        if (typeof loadedDate === "number") {
          nextMeetupDate = loadedDate
          refreshMeetup()
        }
      })
      .catch((error) => {
        console.error("Failed to load next meetup date", error)
      })
  })(),
) => div(
  div.class`top-nav top-nav-fixed`(
    a.href`#links`.class`top-nav-pill`('links'),
    a.href`#merch`.class`top-nav-pill`('merch & more'),
    a.href`#youtube`.class`top-nav-pill`('youtube'),
    a.href`#awards`.class`top-nav-pill`('awards'),
    a.href`./admin.html`.class`top-nav-pill`('👤')
  ),
  div.class`top-nav top-nav-spacer`(
    a.href`#links`.class`top-nav-pill`('links'),
    a.href`#merch`.class`top-nav-pill`('merch & more'),
    a.href`#youtube`.class`top-nav-pill`('youtube'),
    a.href`#awards`.class`top-nav-pill`('awards'),
    a.href`./admin.html`.class`top-nav-pill`('👤')
  ),
  div(
    div.style`
      width: 100%;
      height: 175px;
      background-image: url('assets/media/youtube-channel-banner.jpg');
      background-size: contain;
      background-position: top center;
      background-repeat: repeat-x;
    `,
    style(`
      .hover-spin {
        transition: transform 0.3s ease;
      }
      .hover-spin:hover {
        transform: rotate(360deg) scale(1.1);
      }
      .merch-section {
        background: linear-gradient(135deg, rgba(255,0,100,0.1), rgba(0,255,255,0.1));
        border-radius: 20px;
        padding: 2em 1em;
        margin: 0 1em 2em 1em;
        max-width: calc(100vw - 2em);
        backdrop-filter: blur(10px);
        box-shadow: 0 8px 32px rgba(0,0,0,0.3);
        position: relative;
        overflow: hidden;
        box-sizing: border-box;
      }
      .merch-section::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
        transform: rotate(45deg);
        animation: shimmer 3s infinite;
      }
      @keyframes shimmer {
        0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
        100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
      }
      .merch-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2em;
        position: relative;
        z-index: 1;
      }
      .merch-item {
        position: relative;
        border-radius: 15px;
        overflow: hidden;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
      }
      .merch-item:hover {
        transform: translateY(-10px) scale(1.05);
        box-shadow: 0 10px 30px rgba(255,255,255,0.2);
      }
      .merch-item img {
        width: 100%;
        height: auto;
        display: block;
      }
      .sticker-callout {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 120px;
        animation: pulse 2s infinite;
        z-index: 100;
        filter: drop-shadow(0 0 20px rgba(255,255,0,0.5));
      }
      @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
      }
      .hero-text {
        font-size: clamp(1.2em, 3vw, 1.5em);
        text-align: left;
        background: linear-gradient(45deg, #ff0080, #00ffff, #ff0080);
        background-size: 200% 200%;
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        -webkit-text-fill-color: transparent;
        animation: gradient 3s ease infinite;
        margin: 0.5em 1em;
        line-height: 1.2;
        padding: 0;
        display: inline-block;
        font-weight: bold;
      }
      @keyframes gradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      .welcome-text {
        font-size: clamp(1.5em, 5vw, 2.5em);
        text-align: center;
        background: linear-gradient(90deg, #ff0000, #ffff00, #ff0000);
        background-size: 300% 300%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: welcome-gradient 6s ease infinite;
        line-height: 1.2;
        font-weight: bold;
        font-style: italic;
      }
      @keyframes welcome-gradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      .top-nav {
        background: rgba(0, 0, 0, 0.95);
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        display: flex;
        gap: 0.45em;
        justify-content: center;
        align-items: center;
        padding: 0.45em 0.8em;
        z-index: 200;
        flex-wrap: wrap;
      }
      .top-nav-fixed {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      }
      .top-nav-spacer {
        visibility: hidden;
      }
      .top-nav-pill {
        padding: 0.12em 0.55em;
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.08);
        border: 1px solid rgba(255, 255, 255, 0.2);
        color: white;
        font-size: 0.5em;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        text-decoration: none;
        transition: transform 0.2s ease, background 0.2s ease;
      }
      .top-nav-pill:hover {
        transform: translateY(-1px);
        background: rgba(255, 255, 255, 0.2);
      }
      @media (max-height: 450px) {
        .top-nav {
          padding: 0.3em 0.6em;
          gap: 0.35em;
        }
        .top-nav-pill {
          font-size: 0.45em;
          padding: 0.1em 0.45em;
        }
      }
      .section-anchor {
        scroll-margin-top: 70px;
      }
    `),
    img
      .attr('src', 'assets/media/sticker.png')
      .class`sticker-callout`
      .style`transition: opacity 0.5s ease;`
      .attr('style.opacity', _=> showSticker ? 1 : 0)
      .onClick(() => window.scrollTo({
        top: (document.querySelector('.merch-section') as HTMLElement).offsetTop,
        behavior: 'smooth',
      }))
      .attr('alt', 'Super Wow Limited Edition'),
    div.onClick(() => ++clickCount)(
      style(`
        .carousel-3d-wrapper {
          width: 100%;
          height: 45vh;
          min-height: 350px;
          max-height: 450px;
          position: relative;
          overflow: hidden;
          perspective: 1000px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 1em 0;
        }

        .carousel-3d {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          animation: carousel-rotate 120s infinite linear;
        }

        .carousel-3d-item {
          position: absolute;
          width: 240px;
          height: 300px;
          left: 50%;
          top: 50%;
          margin-left: -120px;
          margin-top: -150px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0,0,0,0.5);
          background: #000;
        }

        .carousel-3d-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .carousel-3d-item:nth-child(1) { transform: rotateY(0deg) translateZ(320px); }
        .carousel-3d-item:nth-child(2) { transform: rotateY(60deg) translateZ(320px); }
        .carousel-3d-item:nth-child(3) { transform: rotateY(120deg) translateZ(320px); }
        .carousel-3d-item:nth-child(4) { transform: rotateY(180deg) translateZ(320px); }
        .carousel-3d-item:nth-child(5) { transform: rotateY(240deg) translateZ(320px); }
        .carousel-3d-item:nth-child(6) { transform: rotateY(300deg) translateZ(320px); }


        @keyframes carousel-rotate {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(-360deg); }
        }

        .carousel-title {
          text-align: center;
          font-size: clamp(2.5em, 7vw, 5em);
          background: linear-gradient(90deg, #ff0080, #00ffff, #ff0080);
          background-size: 200% auto;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shine 3s linear infinite;
          font-weight: bold;
          margin: 0 0 0.5em 0;
          text-transform: uppercase;
          letter-spacing: 3px;
        }

        @keyframes shine {
          to { background-position: 200% center; }
        }

        .carousel-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.9), transparent);
          color: white;
          padding: 1em;
          text-align: center;
          font-weight: bold;
          transform: translateY(0);
          opacity: 0.9;
        }


        @media (max-width: 768px) {
          .carousel-3d-item {
            width: 200px;
            height: 250px;
            margin-left: -100px;
            margin-top: -125px;
          }
          .carousel-3d-item:nth-child(1) { transform: rotateY(0deg) translateZ(250px); }
          .carousel-3d-item:nth-child(2) { transform: rotateY(60deg) translateZ(250px); }
          .carousel-3d-item:nth-child(3) { transform: rotateY(120deg) translateZ(250px); }
          .carousel-3d-item:nth-child(4) { transform: rotateY(180deg) translateZ(250px); }
          .carousel-3d-item:nth-child(5) { transform: rotateY(240deg) translateZ(250px); }
          .carousel-3d-item:nth-child(6) { transform: rotateY(300deg) translateZ(250px); }
        }
      `),
      div.class`bounce-in`.style`--fx-index:5;`(
        div.class`carousel-3d-wrapper`(
          div.class`carousel-3d`(
            div.class`carousel-3d-item`(
              img.attr('src', 'assets/media/unnamed.jpg').attr('alt', 'Cary Hardy')
            ),
            div.class`carousel-3d-item`(
              img.attr('src', 'assets/media/Cary-Hardy.jpg').attr('alt', 'Cary Hardy')
            ),
            div.class`carousel-3d-item`(
              img.attr('src', 'assets/media/cool_shots/CH_chill.jpg').attr('alt', 'Cary Hardy Chill')
            ),
            div.class`carousel-3d-item`(
              img.attr('src', 'assets/media/cool_shots/CH_kong.jpg').attr('alt', 'Cary Hardy Kong')
            ),
            div.class`carousel-3d-item`(
              img.attr('src', 'assets/media/cool_shots/CH_machines.jpg').attr('alt', 'Cary Hardy Machines')
            ),
            div.class`carousel-3d-item`(
              img.attr('src', 'assets/media/cool_shots/playfield_red.jpg').attr('alt', 'Playfield')
            )
          )
        ),
        _=> clickCount > 4 && div.style`text-align: center; margin-top: 2em;`(
          a
            .href`./admin.html`
            .style`color:white; text-decoration: underline;`
            ('🔨 admin tools')
        )
      )
    ),
    div.class`bounce-in`.style`--fx-index:1; text-align: center; max-width: 900px; margin: 0 auto;`(
      h2.class`welcome-text`('Welcome to where I talk and do everything pinball')
    ),
    br,
    div.style`text-align: center;`(
      img
        .attr('src', 'assets/media/pewpew+cary.png')
        .attr('alt', 'Pew Pew Cary Hardy')
        .style`max-width: 900px; width: 100%; height: auto;`
    ),
    br,
    br,
    br,
    div
      .class`bounce-in section-anchor`
      .attr('id', 'links')
      .style`--fx-index:5; display: flex; align-items: center; margin: 1em 0;`(
        div
          .style`flex: 1; height: 1px; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5), rgba(255,255,255,0.5));`,
      small
        .style`padding: 0 1em; color: rgba(255,255,255,0.8); white-space: nowrap;`('links'),
      div
        .style`
          flex: 1;
          height: 1px;
          background: linear-gradient(270deg, transparent, rgba(255,255,255,0.5), rgba(255,255,255,0.5));
        `,
    ),
    div.style`display:flex;flex-wrap:wrap;gap:1em;justify-content: center;`(
      a.href`https://www.youtube.com/channel/UCZ3ah82h0PMiGIRf_rt0cNA`.class`bounce-in link-icon`.style`--fx-index: 2;`(
        img
          .attr('src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA3ElEQVR4Ae2WIQzDIBBFEdPV6Ip6L2Y3Me9NMzuB98GbWrysqHf1otWYismm+vYFTRCEhXXjJrjkmSslLwHgi8vjxkoRKAL/J0BCSHAHGhjQgxHMwIKnY/Px+taNHd2/Bmg3p4wKuIH0Y1RQAB+ugDJxDgn0GQVMSMBmFJhDApSTYwLLQtR13xNAo0oWINS6ErXtpxInX0CmC3g1TURNkypQ+QL1IYG9hiFFRPIL8C8B/ybkO4bsFxH7Vcz+GLE/x5yBRL+LZDVQkTi2Ochn70dimQpFspKKi0AReAF/IVUTZ3/BGQAAAABJRU5ErkJggg==')
          .attr('alt', '')
          .class`hover-spin`
          .style`width:10vw;max-width:60px;border-radius: 50%;`
      ),
      a.href`https://rumble.com/c/c-2975430`.class`bounce-in link-icon`.style`--fx-index: 3;`(
        img
          .attr('src', 'https://rumble.com/i/favicon-v4.png')
          .attr('alt', '')
          .class`hover-spin`
          .style`width:10vw;max-width:60px;border-radius: 50%;`
      ),
      a.href`https://twitter.com/cary_hardy`.class`bounce-in link-icon`.style`--fx-index: 4;`(
        img
          .attr('src', 'https://cdn-icons-png.flaticon.com/512/124/124021.png')
          .attr('alt', '')
          .class`hover-spin`
          .style`width:10vw;max-width:60px;border-radius: 50%;`
      ),
      a.href`https://www.instagram.com/caryhardypinball/`.class`bounce-in link-icon`.style`--fx-index: 5;`(
        img
          .attr('src', 'https://cdn-icons-png.flaticon.com/256/1409/1409946.png')
          .attr('alt', '')
          .class`hover-spin`
          .style`width:10vw;max-width:60px;border-radius: 50%;`
      ),
      a.href`https://www.patreon.com/caryhardy`.class`bounce-in link-icon`.style`--fx-index: 6;`(
        img
          .attr('src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEUUFRj///8AAADe39+AgIE8PT4MDhF3eHhDREUREhUKCxD7+/sFBwwAAAYNDxLl5eWlpabFxcbw8PC/v8BKS0wXGBzLy8yGhoevr7Dv7+9jZGV9fX63t7giIybZ2dlubm+Wl5gpKiwzMzZZWVtiYmRTVFaPj5ChoaJHSEo5OTy9mcuCAAAEZElEQVR4nO3c6XaiQBCGYSgHtVkEcUNjJFFjzP3f4IDOklEnVDc9VDPne/7j8T0szdZ4HgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHRlQncSpbG8moRxclkqDic6C3ZlEjyNbpXP3H8aEnn7+WFTL7U5zPcLovCf/l0DtPLvpMGQseSkWnPjb7PlLs2jeqkoT3fL7Sqo1iZn8c7Qt/vCAaMwpv0mS++X9f11cfyguIO/zmRUqGJ6ywaP8n5sBO8Hil3ZJ00K43i+zf/eV8un5zjpKKGBfqFK3mZf513NDuTEatQtVETZmhNYrceMXGjULFTx5uHh5bG0DOUT9QpDKiJ+YDWCZPLjo1ZhEkx1+mrLgLoNuqNTSGeNLfTXj42FEzUK6e2LIfCLxINsIr+Qjsxj6K3oKJrILqTAYBO9SkU3VG5hPDcOrPdFwfNUZqEio33wp6Xg0M8rVGHRJtD3M7kTcV5h8qQ10D/wJLYrsgqHzy12wqu12HbKKVThtm2g72+lEjmFVLbdRiv5Ruh6kVGonpftA6vj6UJmJTIKaWQj0PeFViKncGencCezJzYXUmkn0I9KkRGjsVAlrLsyHIWbhfGh4bYaXz6XuOBvLKSTrUDfH0msxOZCS8eZ2s7FQkX2Av1I66lWR4WJrSPphcSQ2FRIFk5Jf8sENtOGQhVb3A3rK2HnCofj1tdNn+32E9cK46O10bCWCoyIDYU0snDh9FtUdn+oaSq0ON7XBG5mNBW+2C1cOVeYvNstPLlXmNktfEEhCq0X2j7SuLcf/v/H0kcvhbXh3niYlFbP2taH7h+zNRSGbR4b3kvPzp2XqudWzw1v7djvdXZW6JGVO/o/Td27PrR8MBUYLBoLww+bhaxXczsu9Gzea8tdvJvoUcsn+J9J3IhiFFp6tlYTeb7WWDjZW7vbtnuVeLzGeLpm7fJC4MKCVTj8sHQzKt+LzFLgPAO2dKyRWYWcwnBuZSXmHzITTThvm9i50Jc4n+EWDl8tXGAMBG7oswutjIkbqRfbWIWKWr+tIHFVccV7NzE0f0H4Kg3EZiUw36CldsfTSPA9aO5b0O2uE6WOo5d/zixU1OIJhmQg/119ZX5+WohO8OLPt1ChYeLWExoJrzTmzCizffFEooFa856M9sUX6TmIerPzSPcG8eBNeuqa7gxLOmvdP51KT1zz9GfJxuGK/SQjH8Xi8ysNZjor2jOviLNAehe8MJitHqojYyrp7CA/QfbCZD6+SmhefHnISYuxM59VMPxqREzj1V9X5HJ1dmT91Uy/i1F/1mRRbgfpH9cc0XqwLR37wIlxoXfZWsNxeXovtrPpdLYt3k/lfOHEVwY+a1Po1SerSbXG1KKiqrWaOPCFgVstC6/Uxb/5g61ZKXQaCvsPhf2Hwv5DYf+hsP9Q2H8o7D8U9h8K+w+F/YfC/jP/nndfqNfz+FawkP5XVqnwjuy7EwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATvgOQzxF32eUYx8AAAAASUVORK5CYII=')
          .attr('alt', 'Patreon')
          .class`hover-spin`
          .style`width:10vw;max-width:60px;border-radius: 50%;`
      ),
      a.href`https://silverballswag.com/collections/cary-hardy`.class`bounce-in link-icon`.style`--fx-index: 7;`(
        img
          .attr('src', 'https://cdn.shopify.com/s/files/1/0255/0271/1853/files/silverball_swag_logo_color_360x.png?v=1614300719')
          .attr('alt', 'silverball_swag')
          .class`hover-spin`
          .style`width:10vw;max-width:60px;border-radius: 50%;`
      ),
      a.href`https://www.facebook.com/hardypinball`.class`bounce-in link-icon`.style`--fx-index: 8;`(
        img
          .attr('src', 'data:image/png;base64,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')
          .attr('alt', 'Facebook')
          .class`hover-spin`
          .style`width:10vw;max-width:60px;border-radius: 50%;`
      )
    ),
    br,
    br,
    br,
    div.class`bounce-in section-anchor`.attr('id', 'merch').style`--fx-index:8;`(
      h2.class`hero-text`('PINBALL MERCH & MORE')
    ),
    div.class`merch-section bounce-in`.style`--fx-index:9;`(
      div.style`display: flex; flex-direction: column; align-items: center; gap: 3em;`(
        div.style`display: flex; flex-direction: column; align-items: center; gap: 1em;`(
          div.class`merch-item`.style`max-width: 900px; margin: 0 auto;`(
            a.href`https://buy.stripe.com/eVq14f9f01zi3Vn7mN00003`.attr('target', '_blank')(
              img.attr('src', 'assets/media/wrong_kong_shirts.jpg').attr('alt', 'Wrong Kong Shirt')
            )
          ),
          a
            .attr('target', '_blank')
            .href`https://buy.stripe.com/eVq14f9f01zi3Vn7mN00003`
            .style`display: inline-block; padding: 1em 2em; background: linear-gradient(45deg, #ff0080, #00ffff); border-radius: 50px; color: white; text-decoration: none; font-weight: bold; transition: all 0.3s ease; min-width: 250px; text-align: center;`
            .onMouseover((e: any) => e.target.style.transform = 'scale(1.1)')
            .onMouseout((e: any) => e.target.style.transform = 'scale(1)')(
              "Get your 'Wrong Kong!' T-Shirt"
            ),
          a
            .attr('target', '_blank')
            .href`https://buy.stripe.com/5kQdR11My7XGbnPePf00005`
            .style`display: inline-block; padding: 1em 2em; background: linear-gradient(45deg, #ff0080, #00ffff); border-radius: 50px; color: white; text-decoration: none; font-weight: bold; transition: all 0.3s ease; min-width: 250px; text-align: center;`
            .onMouseover((e: any) => e.target.style.transform = 'scale(1.1)')
            .onMouseout((e: any) => e.target.style.transform = 'scale(1)')(
              '🇦🇺 Wrong Kong for Australia residents'
            )
        ),
        div.style`display: flex; flex-direction: column; align-items: center; gap: 1em;`(
          div.class`merch-item`.style`max-width: 900px; margin: 0 auto;`(
            a.href`https://buy.stripe.com/5kA4j775zaRsdHy9AA`.attr('target', '_blank')(
              img.attr('src', 'assets/media/merch-on-glass.jpg').attr('alt', 'Pinball Merchandise')
            )
          ),
          a
            .attr('target', '_blank')
            .href`https://buy.stripe.com/5kA4j775zaRsdHy9AA`
            .class`bounce-in`
            .style`--fx-index: 11; display: inline-block; padding: 1em 2em; background: linear-gradient(45deg, #ff0080, #00ffff); border-radius: 50px; color: white; text-decoration: none; font-weight: bold; transition: all 0.3s ease; min-width: 250px; text-align: center;`
            .onMouseover((e: any) => e.target.style.transform = 'scale(1.1)')
            .onMouseout((e: any) => e.target.style.transform = 'scale(1)')(
              'More guns than Wick T-shirt'
            )
        )
      ),
      div.style`text-align: center; margin-top: 2em; display: flex; flex-direction: column; gap: 2em; align-items: center;`(
        a
          .attr('target', '_blank')
          .href`https://silverballswag.com/collections/cary-hardy`
          .class`bounce-in`
          .style`--fx-index: 12; display: inline-block; padding: 1em 2em; background: linear-gradient(45deg, #ff0080, #00ffff); border-radius: 50px; color: white; text-decoration: none; font-weight: bold; transition: all 0.3s ease; min-width: 250px; text-align: center;`
          .onMouseover((e: any) => e.target.style.transform = 'scale(1.1)')
          .onMouseout((e: any) => e.target.style.transform = 'scale(1)')(
            'SHOP SILVERBALL SWAG'
          )
      )
    ),
    br,
    br,
    div.class`bounce-in section-anchor`.attr('id', 'youtube').style`--fx-index:5; display: flex; align-items: center; margin: 1em 0;`(
      div
        .style`flex: 1; height: 1px; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5), rgba(255,255,255,0.5));`,
      small.style`padding: 0 1em; white-space: nowrap;`(
        a
          .href`https://www.youtube.com/channel/UCZ3ah82h0PMiGIRf_rt0cNA`
          .attr('target', '_blank')
          .style`color: rgba(255,255,255,0.8); text-decoration: underline; text-underline-offset: 2px;`(
            'youtube channel'
          )
      ),
      div
        .style`flex: 1; height: 1px; background: linear-gradient(270deg, transparent, rgba(255,255,255,0.5), rgba(255,255,255,0.5));`
    ),
    div.style`text-align: center;`(
      div.class`bounce-in`.style`max-width: 900px;margin: auto;--fx-index:12`(
        iframe
          .attr('src', 'https://www.youtube.com/embed/JFkiAk44Ntk')
          .attr('frameborder', '0')
          .attr('allowfullscreen', '')
          .style`width: 100%;height: 500px;`
      ),
      div.style`text-align: center; margin-top: 2em;`(
        a
          .attr('target', '_blank')
          .href`https://www.youtube.com/channel/UCZ3ah82h0PMiGIRf_rt0cNA`
          .class`bounce-in`
          .style`--fx-index: 13; display: inline-block; padding: 1em 2em; background: linear-gradient(45deg, #ff0080, #00ffff); border-radius: 50px; color: white; text-decoration: none; font-weight: bold; transition: all 0.3s ease; min-width: 250px; text-align: center;`
          .onMouseover((e: any) => e.target.style.transform = 'scale(1.1)')
          .onMouseout((e: any) => e.target.style.transform = 'scale(1)')(
            'Goto My Channel'
          )
      ),
      br,
      br,
      br,
      br,
      div.class`fade-in`.style`--fx-index:16`(
        _=> Date.now() < nextMeetupDate && noElement(
          div.class`bounce-in`.style`--fx-index:5; display: flex; align-items: center; margin: 1em 0;`(
            div
              .style`flex: 1; height: 1px; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5), rgba(255,255,255,0.5));`,
            small.style`padding: 0 1em; color: rgba(255,255,255,0.8); white-space: nowrap;`('live meetups'),
            div.style`flex: 1; height: 1px; background: linear-gradient(270deg, transparent, rgba(255,255,255,0.5), rgba(255,255,255,0.5));`,
          ),
          div.style`margin-top: 2em; display: flex; flex-wrap: wrap; justify-content: center; gap: 2em;`(
            div.class`bounce-in`.style`--fx-index:17; position: relative; max-width: 500px; width: 90%; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 60px rgba(255,0,100,0.3), 0 15px 40px rgba(0,255,255,0.2); transform: perspective(1000px) rotateX(2deg);`(
              div.style`position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: linear-gradient(45deg, rgba(255,0,100,0.2), rgba(0,255,255,0.2), rgba(255,0,100,0.2)); animation: shimmer 4s infinite;`,
              img
                .attr('src', 'assets/media/meetup-screenshot.jpg')
                .attr('alt', 'Pinball Community Live Meetup')
                .style`width: 100%; height: auto; display: block; position: relative; z-index: 1;`,
              div.style`position: absolute; bottom: 0; left: 0; right: 0; padding: 1.5em; background: linear-gradient(to top, rgba(0,0,0,0.8), transparent); z-index: 2;`(
                div.style`color: white; font-weight: bold; margin: 0; text-shadow: 2px 2px 4px rgba(0,0,0,0.5); font-size: 1.1em;`('Monthly Live Meetups')
              )
            ),
            div.class`bounce-in`.style`--fx-index:18; position: relative; max-width: 500px; width: 90%; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,255,255,0.3), 0 15px 40px rgba(255,0,100,0.2); transform: perspective(1000px) rotateX(-2deg);`(
              div
                .style`position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: linear-gradient(45deg, rgba(0,255,255,0.2), rgba(255,0,100,0.2), rgba(0,255,255,0.2)); animation: shimmer 4s infinite; animation-delay: 2s;`,
              img
                .attr('src', 'assets/media/meetup-screenshot2.jpg')
                .attr('alt', 'Pinball Community Live Meetup 2')
                .style`width: 100%; height: auto; display: block; position: relative; z-index: 1;`,
              div.style`position: absolute; bottom: 0; left: 0; right: 0; padding: 1.5em; background: linear-gradient(to top, rgba(0,0,0,0.8), transparent); z-index: 2;`(
                div.style`color: white; font-weight: bold; margin: 0; text-shadow: 2px 2px 4px rgba(0,0,0,0.5); font-size: 1.1em;`('Live Discussion & Q&A')
              )
            )
          ),
          div.style`margin-top: 2em;`(
            _=> ClockComponent({date: nextMeetupDate, showLearnMore: true})
          )
        )
      ),
      br,
      br,
      br,
      br,
      img
        .class`bounce-in reflection`
        .attr('alt', 'Cary Hardy logo')
        .attr('src', 'https://cdn.shopify.com/s/files/1/0255/0271/1853/collections/Front_1200x1200.png')
        .style`--fx-index:12;width: 55vw;min-width: 200px;max-width: 400px;`,
      br,
      br,
      br,
      br,
      br,
      div.class`bounce-in section-anchor`.attr('id', 'awards').style`--fx-index:13;`(
        h2.class`hero-text`('AWARD WINNING WORK & CONTENT')
      ),
      div.class`merch-section bounce-in`.style`margin: 2em auto; --fx-index:13;`(
        div.style`display: flex; flex-wrap: wrap; justify-content: center; align-items: flex-start; gap: 2em; margin: 1em 0;`(
          div.style`flex: 0 1 calc(90% - 1.5em); min-width: 250px; max-width: 500px; max-height: 600px; overflow: hidden;`(
            img
              .attr('alt', 'PATB Award')
              .attr('src', 'assets/media/awards/PBaTB award.jpg')
              .style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,
            small.style`color: white; display: block; text-align: center;`('PATB Award')
          ),
          div.style`flex: 0 1 calc(90% - 1.5em); min-width: 250px; max-width: 500px; max-height: 600px; overflow: hidden;`(
            img
              .attr('alt', 'Twipy Award')
              .attr('src', 'assets/media/awards/Twipy.jpg')
              .style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,
            small.style`color: white; display: block; text-align: center;`('Twipy Award')
          ),
          div.style`flex: 0 1 calc(90% - 1.5em); min-width: 250px; max-width: 500px; max-height: 600px; overflow: hidden;`(
            img
              .attr('alt', 'PATB Awards')
              .attr('src', 'assets/media/awards/PatB awards.jpg')
              .style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,
            small.style`color: white; display: block; text-align: center;`('PATB Awards')
          ),
          div.style`flex: 0 1 calc(90% - 1.5em); min-width: 250px; max-width: 500px; max-height: 600px; overflow: hidden;`(
            img
              .attr('alt', 'Cary Hardy and Steve Ritchie handshaking')
              .attr('src', 'assets/media/awards/photo0.jpg')
              .style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,
            small.style`color: white; display: block; text-align: center;`('TPF 2024')
          ),
          div.style`flex: 0 1 calc(90% - 1.5em); min-width: 250px; max-width: 500px; max-height: 600px; overflow: hidden;`(
            img
              .attr('alt', 'Cary Hardy holding award')
              .attr('src', 'assets/media/awards/photo2.jpg')
              .style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,
            small.style`color: white; display: block; text-align: center;`('TPF 2024')
          ),
          div.style`flex: 0 1 calc(90% - 1.5em); min-width: 250px; max-width: 500px; max-height: 600px; overflow: hidden;`(
            img
              .attr('alt', 'Earth Shaker award')
              .attr('src', 'assets/media/awards/EarthShakerAward.jpg')
              .style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,
            small.style`color: white; display: block; text-align: center;`('TPF 2024')
          ),
          div.style`flex: 0 1 calc(90% - 1.5em); min-width: 250px; max-width: 500px; max-height: 600px; overflow: hidden;`(
            img
              .attr('alt', 'TPF 2022')
              .attr('src', 'assets/media/awards/TPF 2022.jpg')
              .style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,
            small.style`color: white; display: block; text-align: center;`('TPF 2022')
          ),
          div.style`flex: 0 1 calc(90% - 1.5em); min-width: 250px; max-width: 500px; max-height: 600px; overflow: hidden;`(
            img
              .attr('alt', 'Cary Hardy owned pinball machine')
              .attr('src', 'assets/media/awards/photo3.jpg')
              .style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,
            small.style`color: white; display: block; text-align: center;`('TPF 2022')
          ),
          div.style`flex: 0 1 calc(90% - 1.5em); min-width: 250px; max-width: 500px; max-height: 600px; overflow: hidden;`(
            img
              .attr('alt', 'Cary Hardy holding award')
              .attr('src', 'assets/media/awards/photo1.jpg')
              .style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,
            small.style`color: white; display: block; text-align: center;`('TPF 2022')
          )
        )
      ),
      br,
      br,
      br,
      br,
      div(
        '📧',
        a
          .href`mailto:hardypinball@gmail.com?subject=website contact&body=Hello, found your email through your website%0A%0A%0A`
          .style`color:white`('hardypinball@gmail.com')
      ),
      br,
      br,
      br,
      br
    )
  )
))
