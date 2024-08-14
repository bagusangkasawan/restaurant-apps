class highlightBar extends HTMLElement {
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
        .content_highlight {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            padding: 2em;
          }
          
          .image_hightlight img {
            width: 100%;
            border: none;
            border-radius: 90px;
            padding-bottom: 1em;
            padding-top: 2em;
          }
          
          .text_hightlight {
            margin: auto;
          }
          
          .text_hightlight h1 {
            font-size: 1.9em;
            color: #962824;
            padding-bottom: 0.5em;
            text-align: center;
          }
          
          .text_hightlight p {
            font-size: 1em;
            padding-top: 1em;
            text-align: justify;
          }

          @media screen and (min-width: 768px) {
            .content_highlight {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
              }
            
              .image_hightlight img {
                padding-right: 1em;
              }
            
              .text_hightlight {
                margin: auto;
              }
            
              .text_hightlight h1 {
                font-size: 1.5em;
                color: #962824;
                padding-bottom: 0.5em;
                text-align: center;
              }
            
              .text_hightlight p {
                font-size: 1em;
              }
            }
    
            @media screen and (min-width: 1024px) {
                .content_highlight {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    padding-top: 3em;
                  }
                
                  .image_hightlight img {
                    padding-right: 2em;
                  }
                
                  .text_hightlight {
                    margin: auto;
                    padding-left: 20px;
                  }
                
                  .text_hightlight h1 {
                    font-size: 2em;
                    color: #962824;
                  }
                
                  .text_hightlight p {
                    font-size: 1.1em;
                  }
            }
        </style>

        <article class="content_highlight">
          <div class="image_hightlight">
            <picture>
              <source media="(max-width: 600px)" srcset="./heros/hero-image_2-small.jpg">
              <img data-src="./heros/hero-image_2-large.jpg" alt="hero restaurant" class="lazyload">
            </picture>
          </div>
          <div class="text_hightlight">
            <h1>Discover the Culinary Delights of Indonesia</h1>
            <hr style="width: 50%; border: 3px solid #de9d7e; margin: auto" />
            <p>
              Indonesia, with its rich cultural heritage, offers a tantalizing array of flavors.
              Each of the country's over 300 ethnic groups brings its unique culinary traditions, creating a diverse food landscape enriched with herbs and spices.
              Indulge in these mouth-watering dishes that will leave you craving for more.
              Get ready to embark on a culinary journey and savor these must-try Indonesian delights.
            </p>
          </div>
        </article>
      `;
  }
}

customElements.define('highlight-bar', highlightBar);
