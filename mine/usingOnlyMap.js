const arrMappedObj = Object.entries(nameObj)
const lowerCasearrMappedObj =arrMappedObj.map((item,id)=>{
  const firstName = item[0].toLowerCase()
  const lastName = item[1]
  return [firstName, lastName]
})
const convertBackToObj= Object.fromEntries(
  lowerCasearrMappedObj
)
const nameSurname = names.map((item) =>{
  item= item.toLowerCase().trim()
  return convertBackToObj[item] ? `${item} ${convertBackToObj[item]}` : item
})

nameSurname