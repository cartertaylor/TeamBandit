module.exports = (req, res, next) => {
    const { email, fname, lname, password } = req.body;

    function validEmail( userEmail )
    {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
    }

    if(req.path === "/register")
    {
        if(![email, fname, lname, password].every(Boolean)){
            return res.status(403).json("Missing Credentials");
        } else if (!validEmail(email)){
            return res.json("Invalid Email");
        }
    } else if ( req.path === "/login") {
        if(![email, password].every(Boolean)) {
            return res.status(401).json("Missing Credentials");
        } else if( !validEmail(email)) {
            return res.status(401).json("Invalid Email");
        }
    }

    next();
};