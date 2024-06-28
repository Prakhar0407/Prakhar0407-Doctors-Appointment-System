
//authentication
export const isAdminAuthenticated = catchAsyncErrors(
    async (req, res, next) => {
      const token = req.cookies.adminToken;
      
      if (!token) {
        return next(new ErrorHandler("Admin is not authenticated!", 400)
        );
      }
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
      req.user = await User.findById(decoded.id);   // from schemaOfUser

      //authorize
      if (req.user.role !== "Admin") {
        return next(new ErrorHandler(`${req.user.role} can not be authorized!`, 403)
        );
      }
      next();
    }
  );