const validateZip = () => {
  const zip = document.getElementById('zip')
  const re = /^[0-9]{5}(-[0-9]{4})?$/

  if (!re.test(zip.value)) {
    zip.classList.add('is-invalid')
  } else {
    zip.classList.remove('is-invalid')
    zip.classList.add('is-valid')
  }
}
