const express = require("express");
const router = express.Router();

const clientRoutes = require("./clientSideRoutes/clientRoutes");

const { asyncHandler } = require("../middlewares/errorHandlers");

// Wake up Route
router.get(
  "/wakeup",
  asyncHandler(async (req, res, next) =>
    res.send({ success: "ok", message: "Server responded with 200" })
  )
);

router.post("/sendMail", clientRoutes.sendMail);
module.exports = router;
