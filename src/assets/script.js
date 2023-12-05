console.log("prueba")


/*--------------------
Vars
--------------------*/
const $menu = document.querySelector('.menu')
const $items = document.querySelectorAll('.menu--item')
let menuHeight = $menu.clientHeight
let itemHeight = $items[0].clientHeight
let wrapHeight = $items.length * itemHeight

let scrollSpeed = 0
let oldScrollY = 0
let scrollY = 0
let y = 0

let httpRequestDone = false;


/*--------------------
Lerp
--------------------*/
const lerp = (v0, v1, t) => {
  return v0 * ( 1 - t ) + v1 * t
}


/*--------------------
Dispose
--------------------*/
const dispose = (scroll) => {
  gsap.set($items, {
    y: (i) => {
      return i * itemHeight + scroll
    },
    modifiers: {
      y: (y) => {
        const s = gsap.utils.wrap(-itemHeight, wrapHeight - itemHeight, parseInt(y))
        return `${s}px`
      }
    }
  })
} 
dispose(0)


/*--------------------
Wheel
--------------------*/
const handleMouseWheel = (e) => {
  scrollY -= e.deltaY  
}


/*--------------------
Touch
--------------------*/
let touchStart = 0
let touchY = 0
let isDragging = false
const handleTouchStart = (e) => {
  touchStart = e.clientY || e.touches[0].clientY
  isDragging = true
  $menu.classList.add('is-dragging')
}
const handleTouchMove = (e) => {
  if (!isDragging) return
  touchY = e.clientY || e.touches[0].clientY
  scrollY += (touchY - touchStart) * 2.5
  touchStart = touchY
}
const handleTouchEnd = () => {
  isDragging = false
  $menu.classList.remove('is-dragging')
}


/*--------------------
Listeners
--------------------*/
$menu.addEventListener('mousewheel', handleMouseWheel)

$menu.addEventListener('touchstart', handleTouchStart)
$menu.addEventListener('touchmove', handleTouchMove)
$menu.addEventListener('touchend', handleTouchEnd)

$menu.addEventListener('mousedown', handleTouchStart)
$menu.addEventListener('mousemove', handleTouchMove)
$menu.addEventListener('mouseleave', handleTouchEnd)
$menu.addEventListener('mouseup', handleTouchEnd)

$menu.addEventListener('selectstart', () => { return false })


/*--------------------
Resize
--------------------*/
window.addEventListener('resize', () => {
  menuHeight = $menu.clientHeight
  itemHeight = $items[0].clientHeight
  wrapHeight = $items.length * itemHeight
})

/*--------------------
Render
--------------------*/
const render = () => {
  // Check if the HTTP request has already been done
  requestAnimationFrame(render)
  y = lerp(y, scrollY, .1)
  dispose(y)

  scrollSpeed = y - oldScrollY
  oldScrollY = y

  gsap.to($items, {
      scale: 1 - Math.min(100, Math.abs(scrollSpeed)) * .005,
      rotate: scrollSpeed * 0.2
  })
}

render()



/*--------------------
API 
--------------------*/

  const url = 'https://liveadmin.bridgehost.net/api/PphOptions/GetOptionsPph';


// ********************************HTTP Serice


  const dataservice = {
      "page": null,
      "type": "service"
  };

  fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataservice),
  })
      .then(response => response.json())
      .then(responseService => {
          console.log(responseService);
      })
      .catch(error => {
          console.error('Error:', error);
      });

// ******************************** HTTP Cards
      const datacards = {
        "page": null,
        "type": "cards"
    };

      fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datacards),
    })
        .then(response => response.json())
        .then(responseCard => {
            console.log(responseCard);
        })
        .catch(error => {
            console.error('Error:', error);
        });

// ******************************** HTTP Features

        const datafeatures = {
          "page": null,
          "type": "features"
      };
  
        fetch(url, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(datafeatures),
      })
          .then(response => response.json())
          .then(responseFeatures => {
              console.log(responseFeatures);
          })
          .catch(error => {
              console.error('Error:', error);
          });


// ******************************** HTTP Price
          const dataPrice = {
            "page": null,
            "type": "price"
        };
    
          fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataPrice),
        })
            .then(response => response.json())
            .then(responsePrice => {
                console.log(responsePrice);
            })
            .catch(error => {
                console.error('Error:', error);
            });
  
// ******************************** HTTP Contact
            const dataContact = {
              "page": null,
              "type": "contact"
          };
      
            fetch(url, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(dataContact),
          })
              .then(response => response.json())
              .then(responseContact => {
                  console.log(responseContact);
              })
              .catch(error => {
                  console.error('Error:', error);
              });


