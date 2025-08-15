import { ClockComponent } from "./clock/clock.tag"
import { callback, html, tag, states } from "taggedjs"
import config from './config'

export const homeTag = tag(() => (
  clickCount = 0,
  showSticker = true,
  _ = states(get => ([clickCount, showSticker] = get(clickCount, showSticker))),
  __ = setTimeout(callback(() => showSticker = false), 5000),
) => html`
  <div>
    <style>
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
        cursor: pointer;
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
    </style>
    
    <br />
    <br />
    
    <!-- Floating sticker on corner -->
    <img src="assets/media/sticker.png" class="sticker-callout" 
      style="transition: opacity 0.5s ease;"
      style.opacity=${showSticker ? 1 : 0}
      onclick=${() => window.scrollTo({
        top: (document.querySelector('.merch-section') as HTMLElement).offsetTop,
        behavior: 'smooth',
      })}
      alt="Super Wow Limited Edition"
    />
    
    <div style="display:flex;gap:1em;justify-content: center;">
      <div class="bounce-in" style="--fx-index:10;" onclick=${() => ++clickCount}>
        <div class="spin-container" style="width:50vw;height:50vw;max-width:400px;max-height:400px;">
          <div>
            <img border="0" src="assets/media/unnamed.jpg"
              style="width:50vw;max-width:400px;border-radius: 50%;"
            />
          </div>
          <div style="top:-20px;left:-20px;border: 20px black solid;border-radius: 50%;background-color: black;">
            <div style="width:50vw;height:50vw;max-width:400px;max-height:400px;"></div>
          </div>
          <div style="top:-20px;left:-20px;border: 20px black solid;border-radius: 50%;background-color: black;">
            <div style="width:50vw;height:50vw;max-width:400px;max-height:400px;"></div>
          </div>
          <div>
            <img border="0" src="assets/media/Cary-Hardy.jpg"
              style="width:50vw;max-width:400px;border-radius: 50%;"
            />
          </div>
        </div>
        ${clickCount > 4 && html`
          <div class="bounce-in">
            <br /><br /><br />
            <a href="./admin.html" style="--fx-index: 0;color:white">admin tools</a>
            <br /><br /><br />
          </div>
        `}
      </div>
    </div>
    
    <br />

    <!-- Welcome Quote -->
    <div class="bounce-in" style="--fx-index:1; text-align: center; max-width: 900px; margin: 0 auto;">
      <h2 class="welcome-text">
        Welcome to where I talk and do everything pinball
      </h2>
    </div>

    
    <br />
    
    <!-- Standalone Pew Pew Cary Image -->
    <div style="text-align: center;">
      <img src="assets/media/pewpew+cary.png" alt="Pew Pew Cary Hardy" 
        style="max-width: 900px; width: 100%; height: auto;"
      />
    </div>

    <br /><br /><br />

    <div class="bounce-in" style="--fx-index:5; display: flex; align-items: center; margin: 1em 0;">
      <div style="flex: 1; height: 1px; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5), rgba(255,255,255,0.5));"></div>
      <small style="padding: 0 1em; color: rgba(255,255,255,0.8); white-space: nowrap;">links</small>
      <div style="flex: 1; height: 1px; background: linear-gradient(270deg, transparent, rgba(255,255,255,0.5), rgba(255,255,255,0.5));"></div>
    </div>

    <div style="display:flex;flex-wrap:wrap;gap:1em;justify-content: center;">
      <a href="https://www.youtube.com/channel/UCZ3ah82h0PMiGIRf_rt0cNA"
        class="bounce-in link-icon" style="--fx-index: 2;"
      >
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA3ElEQVR4Ae2WIQzDIBBFEdPV6Ip6L2Y3Me9NMzuB98GbWrysqHf1otWYismm+vYFTRCEhXXjJrjkmSslLwHgi8vjxkoRKAL/J0BCSHAHGhjQgxHMwIKnY/Px+taNHd2/Bmg3p4wKuIH0Y1RQAB+ugDJxDgn0GQVMSMBmFJhDApSTYwLLQtR13xNAo0oWINS6ErXtpxInX0CmC3g1TURNkypQ+QL1IYG9hiFFRPIL8C8B/ybkO4bsFxH7Vcz+GLE/x5yBRL+LZDVQkTi2Ochn70dimQpFspKKi0AReAF/IVUTZ3/BGQAAAABJRU5ErkJggg=="
          alt="" class="hover-spin"
        style="width:10vw;max-width:60px;border-radius: 50%;" />
      </a>

      <a href="https://rumble.com/c/c-2975430"
        class="bounce-in link-icon" style="--fx-index: 3;"
      >
        <img src="https://rumble.com/i/favicon-v4.png"
          alt="" class="hover-spin"
        style="width:10vw;max-width:60px;border-radius: 50%;" />
      </a>

      <a href="https://twitter.com/cary_hardy"
        class="bounce-in link-icon" style="--fx-index: 4;"
      >
        <img src="https://cdn-icons-png.flaticon.com/512/124/124021.png"
          alt="" class="hover-spin"
        style="width:10vw;max-width:60px;border-radius: 50%;" />
      </a>

      <a href="https://www.instagram.com/caryhardypinball/" 
        class="bounce-in link-icon" style="--fx-index: 5;"
      >
        <img src="https://cdn-icons-png.flaticon.com/256/1409/1409946.png"
          alt="" class="hover-spin"
        style="width:10vw;max-width:60px;border-radius: 50%;" />
      </a>

      <a href="https://www.patreon.com/caryhardy" 
        class="bounce-in link-icon" style="--fx-index: 6;"
      >
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEUUFRj///8AAADe39+AgIE8PT4MDhF3eHhDREUREhUKCxD7+/sFBwwAAAYNDxLl5eWlpabFxcbw8PC/v8BKS0wXGBzLy8yGhoevr7Dv7+9jZGV9fX63t7giIybZ2dlubm+Wl5gpKiwzMzZZWVtiYmRTVFaPj5ChoaJHSEo5OTy9mcuCAAAEZElEQVR4nO3c6XaiQBCGYSgHtVkEcUNjJFFjzP3f4IDOklEnVDc9VDPne/7j8T0szdZ4HgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHRlQncSpbG8moRxclkqDic6C3ZlEjyNbpXP3H8aEnn7+WFTL7U5zPcLovCf/l0DtPLvpMGQseSkWnPjb7PlLs2jeqkoT3fL7Sqo1iZn8c7Qt/vCAaMwpv0mS++X9f11cfyguIO/zmRUqGJ6ywaP8n5sBO8Hil3ZJ00K43i+zf/eV8un5zjpKKGBfqFK3mZf513NDuTEatQtVETZmhNYrceMXGjULFTx5uHh5bG0DOUT9QpDKiJ+YDWCZPLjo1ZhEkx1+mrLgLoNuqNTSGeNLfTXj42FEzUK6e2LIfCLxINsIr+Qjsxj6K3oKJrILqTAYBO9SkU3VG5hPDcOrPdFwfNUZqEio33wp6Xg0M8rVGHRJtD3M7kTcV5h8qQ10D/wJLYrsgqHzy12wqu12HbKKVThtm2g72+lEjmFVLbdRiv5Ruh6kVGonpftA6vj6UJmJTIKaWQj0PeFViKncGencCezJzYXUmkn0I9KkRGjsVAlrLsyHIWbhfGh4bYaXz6XuOBvLKSTrUDfH0msxOZCS8eZ2s7FQkX2Av1I66lWR4WJrSPphcSQ2FRIFk5Jf8sENtOGQhVb3A3rK2HnCofj1tdNn+32E9cK46O10bCWCoyIDYU0snDh9FtUdn+oaSq0ON7XBG5mNBW+2C1cOVeYvNstPLlXmNktfEEhCq0X2j7SuLcf/v/H0kcvhbXh3niYlFbP2taH7h+zNRSGbR4b3kvPzp2XqudWzw1v7djvdXZW6JGVO/o/Td27PrR8MBUYLBoLww+bhaxXczsu9Gzea8tdvJvoUcsn+J9J3IhiFFp6tlYTeb7WWDjZW7vbtnuVeLzGeLpm7fJC4MKCVTj8sHQzKt+LzFLgPAO2dKyRWYWcwnBuZSXmHzITTThvm9i50Jc4n+EWDl8tXGAMBG7oswutjIkbqRfbWIWKWr+tIHFVccV7NzE0f0H4Kg3EZiUw36CldsfTSPA9aO5b0O2uE6WOo5d/zixU1OIJhmQg/119ZX5+WohO8OLPt1ChYeLWExoJrzTmzCizffFEooFa856M9sUX6TmIerPzSPcG8eBNeuqa7gxLOmvdP51KT1zz9GfJxuGK/SQjH8Xi8ysNZjor2jOviLNAehe8MJitHqojYyrp7CA/QfbCZD6+SmhefHnISYuxM59VMPxqREzj1V9X5HJ1dmT91Uy/i1F/1mRRbgfpH9cc0XqwLR37wIlxoXfZWsNxeXovtrPpdLYt3k/lfOHEVwY+a1Po1SerSbXG1KKiqrWaOPCFgVstC6/Uxb/5g61ZKXQaCvsPhf2Hwv5DYf+hsP9Q2H8o7D8U9h8K+w+F/YfC/jP/nndfqNfz+FawkP5XVqnwjuy7EwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATvgOQzxF32eUYx8AAAAASUVORK5CYII="
          alt="Patreon" class="hover-spin"
        style="width:10vw;max-width:60px;border-radius: 50%;" />
      </a>
      
      <a href="https://silverballswag.com/collections/cary-hardy" 
        class="bounce-in link-icon" style="--fx-index: 7;"
      >
        <img src="https://cdn.shopify.com/s/files/1/0255/0271/1853/files/silverball_swag_logo_color_360x.png?v=1614300719"
          alt="silverball_swag" class="hover-spin"
          style="width:10vw;max-width:60px;border-radius: 50%;" />
      </a>
      
      <a href="https://www.facebook.com/hardypinball"
        class="bounce-in link-icon" style="--fx-index: 8;"
      >
        <img src="data:image/png;base64,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"
          alt="Facebook" class="hover-spin"
          style="width:10vw;max-width:60px;border-radius: 50%;"
        />
      </a>
    </div>
    <br /><br /><br />
    
    <!-- Merchandise Showcase Section -->
    <div class="bounce-in" style="--fx-index:8;">
      <h2 class="hero-text">PINBALL MERCH & MORE</h2>
    </div>
    <div class="merch-section bounce-in" style="--fx-index:9;">
      <div class="merch-grid">
        <div class="merch-item" style="max-width: 900px; margin: 0 auto;">
          <img src="assets/media/merch-on-glass.jpg" alt="Pinball Merchandise" />
        </div>
      </div>
      <div style="text-align: center; margin-top: 2em;">
        <a href="https://silverballswag.com/collections/cary-hardy" 
          class="bounce-in" style="--fx-index: 10; display: inline-block; padding: 1em 2em; background: linear-gradient(45deg, #ff0080, #00ffff); border-radius: 50px; color: white; text-decoration: none; font-weight: bold; transition: all 0.3s ease;"
          onmouseover=${(e) => e.target.style.transform = 'scale(1.1)'}
          onmouseout=${(e) => e.target.style.transform = 'scale(1)'}
        >
          SHOP MERCH NOW
        </a>
      </div>
    </div>
        
    <br /><br />

    <div class="bounce-in" style="--fx-index:5; display: flex; align-items: center; margin: 1em 0;">
      <div style="flex: 1; height: 1px; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5), rgba(255,255,255,0.5));"></div>
      <small style="padding: 0 1em; color: rgba(255,255,255,0.8); white-space: nowrap;">youtube channel</small>
      <div style="flex: 1; height: 1px; background: linear-gradient(270deg, transparent, rgba(255,255,255,0.5), rgba(255,255,255,0.5));"></div>
    </div>
    
    <div style="text-align: center;">
      <!-- 📺 YouTube Embed Code with Container -->
      <div style="max-width: 900px;margin: auto;--fx-index:12" class="bounce-in">
        <iframe src="https://www.youtube.com/embed/JFkiAk44Ntk" frameborder="0" allowfullscreen style="width: 100%;height: 500px;"></iframe>
      </div>

      <div style="--fx-index:0" class="bounce-in">
        📧
        <a href="mailto:hardypinball@gmail.com?subject=website contact&body=Hello, found your email through your website%0A%0A%0A"
          style="color:white"
        >hardypinball@gmail.com</a>
      </div>

      <br /><br /><br /><br />
      
      <div class="fade-in" style="--fx-index:16">
        ${Date.now() < config.nextMeetupDate && html`
          <div class="bounce-in" style="--fx-index:5; display: flex; align-items: center; margin: 1em 0;">
            <div style="flex: 1; height: 1px; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5), rgba(255,255,255,0.5));"></div>
            <small style="padding: 0 1em; color: rgba(255,255,255,0.8); white-space: nowrap;">live meetups</small>
            <div style="flex: 1; height: 1px; background: linear-gradient(270deg, transparent, rgba(255,255,255,0.5), rgba(255,255,255,0.5));"></div>
          </div>

          ${ClockComponent({date: config.nextMeetupDate})}
        `}
      </div>
    
      <br /><br /><br /><br />

      <img class="bounce-in reflection" alt="Cary Hardy logo"
        src="https://cdn.shopify.com/s/files/1/0255/0271/1853/collections/Front_1200x1200.png"
        style="--fx-index:12;width: 55vw;min-width: 200px;max-width: 400px;"
      />

      <br /><br /><br /><br /><br />

      <div class="bounce-in" style="--fx-index:15;">
        <h2 class="hero-text">TPF 2024</h2>
      </div>
      <div class="merch-section bounce-in" style="margin: 2em auto;" style="--fx-index:15;">
        <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 2em; margin: 2em 0;">
          <img class="bounce-in reflection"
            alt="Cary Hardy and Steve Ritchie handshaking"
            src="assets/media/photo0.jpg"
            style="--fx-index:13;width: 85vw;max-width: 500px;margin-bottom: 1em;"
          />
          <img class="bounce-in reflection"
            alt="Cary Hardy holding award"
            src="assets/media/photo2.jpg"
            style="--fx-index:14;width: 85vw;max-width: 500px;margin-bottom: 1em;"
          />
          <img class="bounce-in reflection"
            alt="Earth Shaker award"
            src="assets/media/EarthShakerAward.jpg"
            style="--fx-index:15;width: 85vw;max-width: 500px;margin-bottom: 1em;"
          />
        </div>
      </div>

      <br /><br />

      <div class="bounce-in" style="--fx-index:15;">
        <h2 class="hero-text">TPF 2022 WINNER OF GRAND CHAMPION AWARD</h2>
      </div>
      <div class="merch-section bounce-in" style="--fx-index:16; margin: 2em 1em;">
        <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 2em;">
          <img class="reflection" alt="Cary Hardy owned pinball machine" src="assets/media/photo3.jpg"
            style="width: 55vw;min-width: 200px;max-width: 400px;"
          />

          <img class="reflection" alt="Cary Hardy holding award" src="assets/media/photo1.jpg"
            style="width: 55vw;min-width: 200px;max-width: 400px;"
          />
        </div>
      </div>

      <br /><br /><br /><br />
    </div>
  </div>
`)