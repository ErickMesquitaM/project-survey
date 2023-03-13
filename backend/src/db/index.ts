import { connect } from 'mongoose';


export default async function database() {
  await connect(`${process.env.database}`)
    .then( () => console.log('MongoDB ok') )
    .catch( err => console.error(err) )
}