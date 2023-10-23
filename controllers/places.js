const router = require('express').Router()

router.get('/', (req,res)=>{
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/donny-jiang-42gFAgdIUC8-unsplash.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/andre-benz-cXU6tNxhub0-unsplash.jpg'
      }]
      
    res.render('places/index', { places })

})

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.put('/:id', (req, res) => {
  db.Place.findByIdAndUpdate(req.params.id, req.body)
      .then(() => {
          res.redirect(`/places/${req.params.id}`)
      })
      .catch(err => {
          console.log('err', err)
          res.render('error404')
      })
})

module.exports = router
