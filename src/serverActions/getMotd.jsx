export default async function getMotd() {  
  const res = await fetch('https://6555f92584b36e3a431ec057.mockapi.io/motd',{
cache: 'no-store',
})
return res.json()
}
