let amigo = {nome: 'jose',
 sexo : 'm' ,
  peso : 85 ,
   engordar(p=o){
       console.log('Engordou')
       this.peso += p
   }}

   amigo.engordar(2)
   console.log (`${amigo.nome} pesa ${amigo.peso}`)




