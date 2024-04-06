// // app.js
// const express = require('express');
// const mongoose = require('mongoose');
// const session = require('express-session');
// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
// const User = require('./models/User'); // Import User model
// const userController = require('./controllers/userController');
// const routes = require('./allRoutes/routes');
// const bodyParser = require('body-parser');
// const app = express();

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017')
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.error(err));

// // Middleware
// app.use(express.urlencoded({ extended: true }));
// app.use(session({
//   secret: 'your_secret_key',
//   resave: false,
//   saveUninitialized: false
// }));
// app.use(passport.initialize());
// app.use(passport.session());

// // Passport configuration
// // Passport configuration
// passport.use(new LocalStrategy(
//   async function(username, password, done) {
//     try {
//       const user = await User.findOne({ username: username });
//       if (!user) { 
//         return done(null, false, { message: 'Incorrect username.' }); 
//       }
//       if (user.password !== password) { 
//         return done(null, false, { message: 'Incorrect password.' }); 
//       }
//       return done(null, user);
//     } catch (err) {
//       return done(err);
//     }
//   }
// ));


// passport.serializeUser(function(user, done) {
//   done(null, user.id);
// });

// // Passport configuration
// passport.deserializeUser(async function(id, done) {
//   try {
//     const user = await User.findById(id);
//     done(null, user);
//   } catch (err) {
//     done(err);
//   }
// });


// // Route for sign-in
// app.post('/login', passport.authenticate('local', { failureRedirect: '/login' }), function(req, res) {
//   if (req.user.role === 'manager') {
//     res.redirect('/manager');
//   } else if (req.user.role === 'client') {
//     res.redirect('/client');
//   }
// });

// // Other routes
// app.use(routes);

// app.use(express.static('public'));

// app.get('/users', userController.getAllUsers);
// app.post('/users', userController.createUser);

// // Set view engine
// app.set('view engine', 'ejs');
// app.set('views', 'views');

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
