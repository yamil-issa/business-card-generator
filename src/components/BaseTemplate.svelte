<script>
    export let palettes;
    export let paletteIndex = 0;
    $: palette = palettes[paletteIndex];

    let card;
    $: {
        if (card) {
            ["primary", "secondary", "tertiary"].forEach((color, i) => {
                card.style.setProperty(`--${color}`, Object.values(palette)[i]);
            });
        }
    }
</script>

<div bind:this={card} class="cardContainer" data-palette={paletteIndex}>
    <div>
        <slot name="front">
            <div class="placeholder">
                <h2>Card Front</h2>
            </div>
        </slot>
    </div>
    <div>
        <slot name="back">
            <div class="placeholder">
                <h2>Card Back</h2>
            </div>
        </slot>
    </div>
</div>

<style lang="scss">
  .cardContainer {
    position: relative;
    aspect-ratio: 8.5/5.4;
    transition: transform 0.6s;
    transform-style: preserve-3d;

    > div {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      border-radius: 1rem;
      overflow: hidden;

      position: absolute;
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;

      &:nth-child(2) {
        transform: rotateY(180deg);
      }

      > :global(*) {
        height: 100%;
      }
    }
  }

  .placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #242424;
  }
</style>