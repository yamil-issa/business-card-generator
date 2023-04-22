<!-- THIS FILE IS AN EXAMPLE -->
<!-- IT IS COMMENTED IN templates.js SO IT CAN'T BE SEEN NOR USED -->
<!-- IT IS ONLY HERE TO SHOW YOU HOW TO WRITE A TEMPLATE -->

<script>
    // ALL THE VARIABLES HERE ARE NEEDED BY THE TEMPLATE AND CAN'T BE OMITTED

    // palettes is an array of object. Each object is a palette.
    // You can add as many palettes as you want and name the colors as you like.
    // The colors are in hexadecimal format.
    // Only the first two colors of each palette will be shown in the palette picker.
    export const palettes = [{
        contrast: '#303e48',
        background: '#64b5e5'
    }, {
        primary: '#4b084b',
        secondary: '#06fafa'
    }];

    // paletteIndex is the index of the palette to use given by the palette picker.
    export let paletteIndex = 0;

    // palette is the selected palette. It is automatically updated when paletteIndex changes.
    $: palette = palettes[paletteIndex];

    // values is an object containing the values of the form.
    export let values;
</script>

<!-- HERE IS THE BASIC TEMPLATE REQUIRED -->
<!--<div class="cardContainer"-->
<!--     style:--primary={Object.values(palette)[0]}-->
<!--     style:--secondary={Object.values(palette)[1]}-->
<!--&gt;-->
<!--    <div class="cardSide cardSide--front"></div>-->
<!--    <div class="cardSide cardSide--back"></div>-->
<!--</div>-->

<div class="cardContainer" data-palette={paletteIndex}
     style:--primary={Object.values(palette)[0]}
     style:--secondary={Object.values(palette)[1]}
>
    <div class="cardSide cardSide--front">
        <div class="topPart">
            <div class="topPart__container">
                <div class="topPart__text">
                    <h2>île<span>de</span>France</h2>
                    <span>mobilités</span>
                </div>
                <div class="topPart__icon"><img src="/example.svg" alt="logo"></div>
            </div>
        </div>
        <p class="indication">Hover to flip</p>
    </div>
    <div class="cardSide cardSide--back">
        <div class="topPart">
            <div class="topPart__container"></div>
        </div>
        <div class="bottomPart">
            <span style="text-transform: capitalize">{values.firstName}</span>
            <span style="text-transform: uppercase">{values.lastName}</span>
            <span>{values.contact.phone}</span>
            <p class="bottomPart__content">
                Votre passe Navigo est strictement personnel et doit être validé sur les appareils de validation
                rencontrés au cours du voyage. Les conditions générales d'utilisation du passe et des forfaits sont
                disponibles auprès des transporteurs.
            </p>
        </div>
    </div>
</div>

<!-- You can use SCSS by adding lang="scss" -->
<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap');

  .cardSide {
    &--front, &--back {
      background-color: var(--secondary);
      color: white;
      font-family: Raleway, sans-serif;
    }
  }

  .indication {
    font-size: 4rem;
    margin: 1.2rem 0 0;
  }

  .cardContainer[data-palette="1"] .indication {
    color: var(--primary);
  }

  .topPart {
    display: flex;
    width: 100%;
    background: var(--primary);
    color: var(--secondary);

    h2 {
      font-size: 2.5rem;
      font-weight: 700;
      margin: 0;
      line-height: 20px;

      span {
        font-weight: 400;
        color: inherit;
        font-size: inherit;
      }
    }

    span {
      font-size: 1.8rem;
      color: white;
    }

    &__container {
      display: flex;
      column-gap: .2rem;
      align-items: flex-start;
      padding-top: 1.5rem;
      padding-bottom: .5rem;
      margin: 0 auto;
      height: 5rem;
      box-sizing: border-box;
    }

    &__text {
      text-align: end;
    }

    &__icon {
      background: var(--secondary);
      border-radius: .75rem;
      height: 3.25rem;
      padding: .2rem;
      box-sizing: border-box;

      img {
        transform: rotate(90deg);
        max-width: 100%;
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }

  .bottomPart {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    padding: 1rem;

    writing-mode: vertical-rl;
    transform: rotate(180deg);
    color: black;
    text-align: end;
    line-height: 1rem;

    span {
      font-weight: bold;
    }

    &__content {
      margin-right: 2rem;
      font-size: .75rem;
    }
  }
</style>