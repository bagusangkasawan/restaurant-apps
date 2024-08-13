class HeroBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  render() {
    this.innerHTML = `
      <style>
        .hero {
          display: flex;
          align-items: center;
          min-height: 500px;
          width: 100%;
          text-align: center;
          border-radius: 5px;
          overflow: hidden;
          position: relative;
        }

        .hero picture {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: -1;
        }

        .hero img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero_inner {
          margin: 0 auto;
          max-width: 800px;
          position: relative;
          z-index: 1;
        }

        .hero_title {
          color: #962824;
          font-weight: 700;
          font-size: 2.9em;
        }

        .hero_tagline {
          color: #fff;
          margin-top: 20px;
          font-size: 0.9em;
          font-weight: 400;
          padding-left: 1em;
          padding-right: 1em;
        }

        @media screen and (min-width: 768px) {
          .hero_title {
            font-size: 2.7em;
          }
        
          .hero_tagline {
            font-size: 1.2em;
          }
        }
    
        @media screen and (min-width: 1024px) {
          .hero_title {
            font-size: 3.1em;
          }
        
          .hero_tagline {
            font-size: 1.1em;
          }
        }
      </style>

      <div class="hero">
        <picture>
          <source media="(max-width: 600px)" srcset="./heros/hero-image_3-large.jpg">
          <img class="lazyload" src="./heros/hero-image_3-small.jpg" alt="Hero Image">
        </picture>
        <div class="hero_inner">
          <h1 class="hero_title">Where to Dine?</h1>
          <p class="hero_tagline">
            From street food vendors offering authentic local flavors to upscale restaurants providing luxurious dining experiences, Indonesia has it all.
            Whether you're craving a quick bite or a gourmet meal, you'll find a variety of options to satisfy your taste buds.
          </p>
        </div>
      </div>
    `;
  }
}

customElements.define('hero-bar', HeroBar);
