import { ClockComponent } from "./clock/clock.tag"
import { iframe, img, a, br, button, div, h2, small, style, tag, callback, noElement } from "taggedjs"
import { topNavBar } from "./ui/topNav.tag"
import { publicNavButtons } from "./ui/publicNavButtons.tag"
import { publicFooter } from "./ui/publicFooter.tag"
import { loadNextMeetupDate } from "./firebase"

let meetupLoaded = false

export const homeTag = tag(() => (
  clickCount = 0,
  showSticker = true,
  showAwards = false,
  showMeetups = false,
  showYoutube = false,
  showLinks = false,
  showMerch = false,
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
  topNavBar(() => publicNavButtons()),
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
      .section-anchor {
        scroll-margin-top: 70px;
      }
      .fold-section-toggle {
        width: min(920px, calc(100% - 2em));
        margin: 0 auto;
        padding: 0.8em 1em;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1em;
        border: 1px solid rgba(255,255,255,0.24);
        border-radius: 12px;
        background:
          linear-gradient(90deg, rgba(255,0,128,0.18), rgba(0,255,255,0.12)),
          rgba(0,0,0,0.55);
        color: #fff;
        cursor: pointer;
        box-shadow: 0 14px 36px rgba(0,0,0,0.32);
      }
      .fold-section-toggle:hover {
        border-color: rgba(255,255,255,0.42);
        background:
          linear-gradient(90deg, rgba(255,0,128,0.24), rgba(0,255,255,0.18)),
          rgba(0,0,0,0.62);
      }
      .fold-section-toggle .hero-text {
        margin: 0;
      }
      .fold-section-icon {
        width: 2.2em;
        height: 2.2em;
        border-radius: 999px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 0 0 auto;
        background: rgba(255,255,255,0.1);
        border: 1px solid rgba(255,255,255,0.22);
        font-size: 0.8em;
      }
      .fold-section-actions {
        display: flex;
        align-items: center;
        gap: 0.55em;
        flex: 0 0 auto;
      }
      .fold-section-badge {
        min-width: 3.2em;
        padding: 0.35em 0.55em;
        border-radius: 999px;
        background: rgba(246,193,119,0.16);
        border: 1px solid rgba(246,193,119,0.36);
        color: #f6c177;
        font-size: 0.8em;
        font-weight: 900;
        line-height: 1;
        text-align: center;
      }
      .fold-section-content {
        overflow: hidden;
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
        @media (max-width: 520px) {
          .carousel-3d-wrapper {
            margin: 0.35em 0 0.6em;
          }
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
    div.class`bounce-in section-anchor`.attr('id', 'merch').style`--fx-index:3;`(
      button
        .type`button`
        .class`fold-section-toggle`
        .attr('aria-expanded', _=> showMerch ? 'true' : 'false')
        .onClick(() => showMerch = !showMerch)(
          h2.class`hero-text`('👕 PINBALL MERCH & MORE'),
          div.class`fold-section-icon`(_=> showMerch ? '▲' : '▼')
        )
    ),
    _=> showMerch ? div.class`merch-section bounce-in fold-section-content`.style`--fx-index:2;`(
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
            .style`display: inline-block; padding: 1em 2em; background: linear-gradient(45deg, #ff0080, #00ffff); border-radius: 50px; color: white; text-decoration: none; font-weight: bold; transition: all 0.3s ease; min-width: min(250px, calc(100vw - 2.5em)); text-align: center;`
            .onMouseOver((e: any) => e.target.style.transform = 'scale(1.1)')
            .onMouseOut((e: any) => e.target.style.transform = 'scale(1)')(
              "Get your 'Wrong Kong!' T-Shirt"
            ),
          a
            .attr('target', '_blank')
            .href`https://buy.stripe.com/5kQdR11My7XGbnPePf00005`
            .style`display: inline-block; padding: 1em 2em; background: linear-gradient(45deg, #ff0080, #00ffff); border-radius: 50px; color: white; text-decoration: none; font-weight: bold; transition: all 0.3s ease; min-width: min(250px, calc(100vw - 2.5em)); text-align: center;`
            .onMouseOver((e: any) => e.target.style.transform = 'scale(1.1)')
            .onMouseOut((e: any) => e.target.style.transform = 'scale(1)')(
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
            .style`--fx-index: 9; display: inline-block; padding: 1em 2em; background: linear-gradient(45deg, #ff0080, #00ffff); border-radius: 50px; color: white; text-decoration: none; font-weight: bold; transition: all 0.3s ease; min-width: min(250px, calc(100vw - 2.5em)); text-align: center;`
            .onMouseOver((e: any) => e.target.style.transform = 'scale(1.1)')
            .onMouseOut((e: any) => e.target.style.transform = 'scale(1)')(
              'More guns than Wick T-shirt'
            )
        )
      ),
      div.style`text-align: center; margin-top: 2em; display: flex; flex-direction: column; gap: 2em; align-items: center;`(
        a
          .attr('target', '_blank')
          .href`https://silverballswag.com/collections/cary-hardy`
          .class`bounce-in`
          .style`--fx-index: 9; display: inline-block; padding: 1em 2em; background: linear-gradient(45deg, #ff0080, #00ffff); border-radius: 50px; color: white; text-decoration: none; font-weight: bold; transition: all 0.3s ease; min-width: min(250px, calc(100vw - 2.5em)); text-align: center;`
          .onMouseOver((e: any) => e.target.style.transform = 'scale(1.1)')
          .onMouseOut((e: any) => e.target.style.transform = 'scale(1)')(
            'SHOP SILVERBALL SWAG'
          )
      )
    ) : '',

    br,
    div.class`bounce-in section-anchor`.attr('id', 'links').style`--fx-index:4;`(
      button
        .type`button`
        .class`fold-section-toggle`
        .attr('aria-expanded', _=> showLinks ? 'true' : 'false')
        .onClick(() => showLinks = !showLinks)(
          h2.class`hero-text`('🔗 LINKS'),
          div.class`fold-section-icon`(_=> showLinks ? '▲' : '▼')
        )
    ),
    _=> showLinks ? div.class`fold-section-content`.style`display:flex;flex-wrap:wrap;gap:1em;justify-content: center;padding-top:1em;`(
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
          .attr('src', 'https://cdn-icons-png.flaticon.com/256/124/124010.png')
          .attr('alt', 'Facebook')
          .class`hover-spin`
          .style`width:10vw;max-width:60px;border-radius: 50%;`
      )
    ) : '',

    br,
    div.class`bounce-in section-anchor`.attr('id', 'games').style`--fx-index:5;`(
      a
        .href`/lineup.html`
        .class`fold-section-toggle`
        .style`text-decoration:none;box-sizing:border-box;`(
          h2.class`hero-text`('🎮 GAMES')
        )
    ),

    br,
    div.class`bounce-in section-anchor`.attr('id', 'youtube').style`--fx-index:5;`(
      button
        .type`button`
        .class`fold-section-toggle`
        .attr('aria-expanded', _=> showYoutube ? 'true' : 'false')
        .onClick(() => showYoutube = !showYoutube)(
          h2.class`hero-text`('📺 YOUTUBE CHANNEL'),
          div.class`fold-section-actions`(
            div.class`fold-section-badge`('+12K subs'),
            div.class`fold-section-icon`(_=> showYoutube ? '▲' : '▼')
          )
        )
    ),
    br,
    _=> showYoutube ? div.class`fold-section-content`.style`text-align: center; margin-top: 2em;`(
      div.class`bounce-in`.style`max-width: 900px;padding-top:1em;margin:auto;--fx-index:2`(
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
          .style`--fx-index: 5; display: inline-block; padding: 1em 2em; background: linear-gradient(45deg, #ff0080, #00ffff); border-radius: 50px; color: white; text-decoration: none; font-weight: bold; transition: all 0.3s ease; min-width: min(250px, calc(100vw - 2.5em)); text-align: center;`
          .onMouseOver((e: any) => e.target.style.transform = 'scale(1.1)')
          .onMouseOut((e: any) => e.target.style.transform = 'scale(1)')(
            'Goto My Channel'
          )
      ),
      br,
      br,
    ) : '',
    div.class`fade-in`.style`--fx-index:6`(
        _=> Date.now() < nextMeetupDate && noElement(
          div.class`bounce-in section-anchor`.attr('id', 'live-meetups').style`--fx-index:5;`(
            button
              .type`button`
              .class`fold-section-toggle`
              .attr('aria-expanded', _=> showMeetups ? 'true' : 'false')
              .onClick(() => showMeetups = !showMeetups)(
                h2.class`hero-text`('🗓️ LIVE MEETUPS'),
                div.class`fold-section-actions`(
                  div.class`fold-section-badge`(_=> daysUntilLabel(nextMeetupDate)),
                  div.class`fold-section-icon`(_=> showMeetups ? '▲' : '▼')
                )
              )
          ),
          _=> showMeetups ? div.class`fold-section-content bounce-in`.style`--fx-index:2;`(
            div.style`margin-top: 2em; display: flex; flex-wrap: wrap; justify-content: center; gap: 2em;`(
              div.style`position: relative; max-width: 500px; width: 90%; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 60px rgba(255,0,100,0.3), 0 15px 40px rgba(0,255,255,0.2); transform: perspective(1000px) rotateX(2deg);`(
                div.style`position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: linear-gradient(45deg, rgba(255,0,100,0.2), rgba(0,255,255,0.2), rgba(255,0,100,0.2)); animation: shimmer 4s infinite;`,
                img
                  .attr('src', 'assets/media/meetup-screenshot.jpg')
                  .attr('alt', 'Pinball Community Live Meetup')
                  .style`width: 100%; height: auto; display: block; position: relative; z-index: 1;`,
                div.style`position: absolute; bottom: 0; left: 0; right: 0; padding: 1.5em; background: linear-gradient(to top, rgba(0,0,0,0.8), transparent); z-index: 2;`(
                  div.style`color: white; font-weight: bold; margin: 0; text-shadow: 2px 2px 4px rgba(0,0,0,0.5); font-size: 1.1em;`('Monthly Live Meetups')
                )
              ),
              div.style`position: relative; max-width: 500px; width: 90%; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,255,255,0.3), 0 15px 40px rgba(255,0,100,0.2); transform: perspective(1000px) rotateX(-2deg);`(
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
          ) : ''
        )
      ),
      br,
      div.class`bounce-in section-anchor`.attr('id', 'awards').style`--fx-index:7;`(
        button
          .type`button`
          .class`fold-section-toggle`
          .attr('aria-expanded', _=> showAwards ? 'true' : 'false')
          .onClick(() => showAwards = !showAwards)(
            h2.class`hero-text`('🏆 AWARD WINNING WORK & CONTENT'),
            div.class`fold-section-icon`(_=> showAwards ? '▲' : '▼')
          )
      ),
      _=> showAwards ? div.class`merch-section bounce-in fold-section-content`.style`margin: 2em auto; --fx-index:2;`(
        div.style`display: flex; flex-wrap: wrap; justify-content: center; align-items: flex-start; gap: 2em; margin: 1em 0;`(
          div.style`flex: 0 1 calc(90% - 1.5em); min-width: min(250px, calc(100vw - 2.5em)); max-width: 500px; max-height: 600px; overflow: hidden;`(
            img
              .attr('alt', 'PATB Award')
              .attr('src', 'assets/media/awards/PBaTB award.jpg')
              .style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,
            small.style`color: white; display: block; text-align: center;`('PATB Award')
          ),
          div.style`flex: 0 1 calc(90% - 1.5em); min-width: min(250px, calc(100vw - 2.5em)); max-width: 500px; max-height: 600px; overflow: hidden;`(
            img
              .attr('alt', 'Twipy Award')
              .attr('src', 'assets/media/awards/Twipy.jpg')
              .style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,
            small.style`color: white; display: block; text-align: center;`('Twipy Award')
          ),
          div.style`flex: 0 1 calc(90% - 1.5em); min-width: min(250px, calc(100vw - 2.5em)); max-width: 500px; max-height: 600px; overflow: hidden;`(
            img
              .attr('alt', 'PATB Awards')
              .attr('src', 'assets/media/awards/PatB awards.jpg')
              .style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,
            small.style`color: white; display: block; text-align: center;`('PATB Awards')
          ),
          div.style`flex: 0 1 calc(90% - 1.5em); min-width: min(250px, calc(100vw - 2.5em)); max-width: 500px; max-height: 600px; overflow: hidden;`(
            img
              .attr('alt', 'Cary Hardy and Steve Ritchie handshaking')
              .attr('src', 'assets/media/awards/photo0.jpg')
              .style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,
            small.style`color: white; display: block; text-align: center;`('TPF 2024')
          ),
          div.style`flex: 0 1 calc(90% - 1.5em); min-width: min(250px, calc(100vw - 2.5em)); max-width: 500px; max-height: 600px; overflow: hidden;`(
            img
              .attr('alt', 'Cary Hardy holding award')
              .attr('src', 'assets/media/awards/photo2.jpg')
              .style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,
            small.style`color: white; display: block; text-align: center;`('TPF 2024')
          ),
          div.style`flex: 0 1 calc(90% - 1.5em); min-width: min(250px, calc(100vw - 2.5em)); max-width: 500px; max-height: 600px; overflow: hidden;`(
            img
              .attr('alt', 'Earth Shaker award')
              .attr('src', 'assets/media/awards/EarthShakerAward.jpg')
              .style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,
            small.style`color: white; display: block; text-align: center;`('TPF 2024')
          ),
          div.style`flex: 0 1 calc(90% - 1.5em); min-width: min(250px, calc(100vw - 2.5em)); max-width: 500px; max-height: 600px; overflow: hidden;`(
            img
              .attr('alt', 'TPF 2022')
              .attr('src', 'assets/media/awards/TPF 2022.jpg')
              .style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,
            small.style`color: white; display: block; text-align: center;`('TPF 2022')
          ),
          div.style`flex: 0 1 calc(90% - 1.5em); min-width: min(250px, calc(100vw - 2.5em)); max-width: 500px; max-height: 600px; overflow: hidden;`(
            img
              .attr('alt', 'Cary Hardy owned pinball machine')
              .attr('src', 'assets/media/awards/photo3.jpg')
              .style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,
            small.style`color: white; display: block; text-align: center;`('TPF 2022')
          ),
          div.style`flex: 0 1 calc(90% - 1.5em); min-width: min(250px, calc(100vw - 2.5em)); max-width: 500px; max-height: 600px; overflow: hidden;`(
            img
              .attr('alt', 'Cary Hardy holding award')
              .attr('src', 'assets/media/awards/photo1.jpg')
              .style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,
            small.style`color: white; display: block; text-align: center;`('TPF 2022')
          )
        )
      ) : '',
      br,
      br,
      img
        .class`bounce-in reflection`
        .attr('alt', 'Cary Hardy logo')
        .attr('src', 'https://cdn.shopify.com/s/files/1/0255/0271/1853/collections/Front_1200x1200.png')
        .style`--fx-index:8;width: 55vw;min-width: 200px;max-width: 400px;`,

    _=> publicFooter()
  )
))

const daysUntilLabel = (dateValue: number) => {
  const days = Math.max(0, Math.ceil((dateValue - Date.now()) / (24 * 60 * 60 * 1000)))
  return `${days}d`
}
