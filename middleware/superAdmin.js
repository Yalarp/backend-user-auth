const superAdmin = (req, res, next) => {
    if (req.user.role !== 'superadmin') {
      res.status(403).json({ message: 'Forbidden - Super Admin access required' });
    } else {
      next();
    }
  };
  
  module.exports = superAdmin;