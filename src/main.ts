import './style.stylus'

const productIds = ['X1_100', 'Y2_002', 'X3_001', 'X1_002']
const closeButton = document.getElementsByClassName('close')[0]


const setActive = (e: HTMLElement) => {
  e.classList.add('isActive')
  e.classList.remove('isHidden')
  closeButton.classList.add('isActive')
}
const setHidden = (e: HTMLElement) => {
  e.classList.remove('isActive')
  e.classList.add('isHidden')
}
const setShrinkDelay = (e: HTMLElement) => {
  e?.classList.add('isShrinking')
  setTimeout(() => e?.classList.remove('isShrinking'), 1000)
}
const setGrowingDelay = (e: HTMLElement) => {
  e?.classList.add('isGrowing')
  setTimeout(() => e?.classList.remove('isGrowing'), 1000)
}
const reset = (id: string) => {
  const element = document.getElementById(id) as HTMLElement
  element?.classList.contains('isActive')
    ? setShrinkDelay(element)
    : setGrowingDelay(element)
  element?.classList.remove('isActive')
  element?.classList.remove('isHidden')
  closeButton.classList.remove('isActive')
}

const toggleIsActive = ({ currentTarget }: { currentTarget: EventTarget | null }) =>
  productIds.forEach(id => {
    const element = document.getElementById(id) as HTMLElement
    element !== currentTarget
      ? setHidden(element)
      : setActive(element)
  })

const resetAll = () => 
  productIds.forEach(reset)

  
const watchProducts = (id: string) =>
  document.getElementById(id)
    ?.addEventListener('click', toggleIsActive)

productIds?.forEach(watchProducts)
closeButton?.addEventListener('click', resetAll)
