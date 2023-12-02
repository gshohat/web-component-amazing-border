export const template = document.createElement('template');

template.innerHTML = `
<style>                               
:host {
    width: 100%;
    height: 100%;
}

.svg-wrapper {
    height: 100%;
}

.shape {
  stroke-dasharray: 110;
  stroke-dashoffset: 90;
  stroke-width: 2px;
  fill: transparent;
  stroke: blue;
  animation: border 2s linear forwards;
}

@keyframes border {
  to {
    stroke-dashoffset: 0;
  }
}
</style>
    
 <div class="svg-wrapper">
    <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
    <rect class="shape" height="100%" width="100%" pathLength="100"/>
    
    <foreignObject width="100%" height="100%">
        <slot class="text content" name="content"></slot>
    </foreignObject>
    </svg>
</div>
   
`
