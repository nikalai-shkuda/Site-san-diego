new Vue ({
  el: '.js-product',
  data: {
    title: 'All news. All of the time. On every device.',
    subTitle: 'Subscription options',
    tiles: [{
      image: 'img/pic-1.jpg',
      title: 'Digital',
      text: '4 weeks only then $1.99 / week',
      price: '99¢',
      advantage: ['Unlimited access to online content',
                  'Unlimited access plus breaking news alert',
                  'Unlimited access to online content'],
      btnStart: 'Start now',
      btnDetails: 'Details'
    },
    {
      image: 'img/pic-2.jpg',
      title: 'Print + Digital',
      text: '4 weeks only then $1.99 / week',
      price: '99¢',
      advantage: ['Unlimited access to online content',
                  'Unlimited access plus breaking news alert',
                  'Unlimited access to online content',
                  'Unlimited access plus breaking news alert'],
      btnStart: 'Start now',
      btnDetails: 'Details'
    },
    {
      image: 'img/pic-3.jpg',
      title: 'Special Offer',
      text: '4 weeks only then $1.99 / week',
      price: '99¢',
      advantage: ['Unlimited access to online content',
                  'Unlimited access plus breaking news alert',
                  'Unlimited access to online content',
                  'Unlimited access plus breaking news alert',
                  'Unlimited access to online content'],
      btnStart: 'Start now',
      btnDetails: 'Details'
    }]
  }
})

new Vue ({
  el: '.js-offer',
  data: {
    title: 'Offers',
    tiles: [{
      title: 'Sunday Only',
      price: '99¢ / 4 weeks only then $1.99 / week',
      btnStart: 'Start now'
    },
    {
      title: 'Thursday-Sunday',
      price: '99¢ / 4 weeks only then $1.99 / week',
      btnStart: 'Start now'
    },
    {
      title: 'Monday-Sunday',
      price: '99¢ / 4 weeks only then $1.99 / week',
      btnStart: 'Start now'
    }]
  }
})

new Vue ({
  el: '.js-benefits',
  data: {
    title: 'Benefits',
    tiles: [{
      title: 'Access to exclusive, behind-the-scenes stories, photos and vide',
      info: 'Behind-the-scenes stories, photos and vide'
    },
    {
      title: 'Access to exclusive, behind-the-scenes stories, photos and vide',
      info: 'Behind-the-scenes stories, photos and vide'
    },
    {
      title: 'Access to exclusive, behind-the-scenes stories, photos and vide',
      info: 'Behind-the-scenes stories, photos and vide'
    }]
  }
})

new Vue ({
  el: '.js-footer',
  data: {
    date: '© 2018',
    links: ['Home',
            'FAQ',
            'Contact Us',
            'Terms of Service',
            'Privacy']
  }
})