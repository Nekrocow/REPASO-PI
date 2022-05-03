const tryCatchWrapper = (fn) => {
  try {
    fn
  } catch (error) {
    next(error)
  }
}

module.exports = { tryCatchWrapper }