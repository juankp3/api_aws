export const handler = async (event : any, context : any, callback : () => void) => {
  console.log(event)
  console.log(context)
  return {
    'statusCode' : 200,
    'body' : JSON.stringify('Hola mundo'),
  }
}