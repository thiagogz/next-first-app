import Link from "next/link";

export default async function Pedido() {
  const response = await fetch ('http://localhost:8000/pizza/sizes')
  const data = await response.json()
  return (
    <div>
      <h1>Pedido</h1>
      <div>
        { data.map(({ id, flavours, size, slices, text }) => (
          <p key={id}>
            {flavours}, {size}, {slices}, {text}
          </p>
        ))}
      </div>
      <Link href="/">Home</Link>
    </div>
  )
}