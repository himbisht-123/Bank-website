const btnscroll=document.querySelector('.btn--scroll-to');
const section1=document.querySelector('.section');
const Modal=document.querySelector('.modal');
const Overlay=document.querySelector('.overlay');
const btnclose=document.querySelector('.btn--close-modal');
const tabcontainer=document.querySelector('.operations__tab-container');
const nav=document.querySelector('.nav');
const dotContainer=document.querySelector('.dots');

btnscroll.addEventListener('click',function(e)
{
    e.preventDefault();
    section1.scrollIntoView({behavior:'smooth'})
})
 
const movenav=document.querySelectorAll('.nav__link')
movenav.forEach(function(e)
{
    e.addEventListener('click',function(e1)
    {
        e1.preventDefault();
      //  console.log(e1.target);
        const id=this.getAttribute('href');
    //    console.log(id);
        document.querySelector(id).scrollIntoView({behavior:'smooth'});
    })
})

const btnopenaccount=document.querySelector('.btn--show-modal');
btnopenaccount.addEventListener('click',function(e)
{
    e.preventDefault();
    Modal.classList.remove('hidden');
    Overlay.classList.remove('hidden');

})
btnclose.addEventListener('click',function(e)
{
    e.preventDefault();
    Modal.classList.add('hidden');
    Overlay.classList.add('hidden');
})
const tab=document.querySelectorAll('.operations__tab');
const tabcontent=document.querySelectorAll('.operations__content');
tabcontainer.addEventListener('click',function(e)
{
    e.preventDefault();
    const clicked=e.target.closest('.operations__tab');
  console.log(clicked);
     if(!clicked) return;
     tab.forEach(t=>t.classList.remove('operations__tab--active'));
     tabcontent.forEach(k=>k.classList.remove('operations__content--active'));
     //active tab
     clicked.classList.add('operations__tab--active');
     document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');

})
//const nav=document.querySelector('.nav__links');
console.log(nav);

const handleHover=function(e)
{
//     console.log('BHarat');
//  console.log(e.target);

  if(e.target.classList.contains('nav__link'))
  {
      const link=e.target;
  //    console.log('Himanshu');
    //  console.log(link);      
      const arrow=link.closest('.nav').querySelectorAll('.nav__link');
      const logo=link.closest('.nav').querySelector('img');
      arrow.forEach(e1=>
        {
            if(e1!==link) e1.style.opacity=this;
        })
        logo.style.opacity=this;
  } 
  
}
nav.addEventListener('mouseover',handleHover.bind(0.5));
nav.addEventListener('mouseout',handleHover.bind(1));

//const navall=document.querySelector('.nav');
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);
const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `${navHeight}px`
});

headerObserver.observe(header);
const allsection=document.querySelectorAll('.section');
//console.log(allsection);
const revealsection=function(entries,observer)
{
   const [entry]=entries;
   if(!entry.isIntersecting) {return};
 entry.target.classList.remove('section--hidden');
   observer.unobserve(entry.target);
}

const sectionobserver=new IntersectionObserver(revealsection,{
    root:null,
    threshold:0.15
});
console.log(sectionobserver);

allsection.forEach(function(section)
{
    sectionobserver.observe(section);
    section.classList.add('section--hidden');

})

const imgpoint=document.querySelectorAll('img[data-src]');
//console.log(imgtarget);

const loadimg=function(entries,observer)
{
  const [entry]=entries;
  if(!entry.isIntersecting) return;
   
  entry.target.src=entry.target.dataset.src;
  console.log(entry.target.src);
  entry.target.addEventListener('load',function()
  {
      entry.target.classList.remove('lazy-img');
  })

  observer.unobserve(entry.target);
}
const imgobserver=new IntersectionObserver(loadimg,{
    root:null,
    threshold:0,
    rootMargin:'200px'
});

imgpoint.forEach(t=>imgobserver.observe(t));

// const slider=function(){


const leftbtn=document.querySelector('.slider__btn--left');
const rightbtn=document.querySelector('.slider__btn--right');
const slidelength=document.querySelectorAll('.slide');

let currentslide=0;
const maxlength=slidelength.length;
//console.log(slidelength);

const goslide=function(slidecome)
{
    slidelength.forEach((s,i)=>(s.style.transform=`translateX(${ 100*(i-slidecome)}%)`)
    )

}
const leftslide=function()
{
    if(currentslide===0)
    {
        currentslide=maxlength-1;
    }
    else{
        currentslide--;
    }
    goslide(currentslide);
}
const rightslide=function()
{
    if(currentslide===maxlength-1)
    {
        currentslide=0;
    }
    else{
        currentslide++;
    }
    goslide(currentslide);
}




leftbtn.addEventListener('click',leftslide);
rightbtn.addEventListener('click',rightslide);

// }
// slider();