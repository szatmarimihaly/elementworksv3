import { image, imageName } from "@/data/reference"
import Image from "next/image"

interface Reference{
    id : number
    name : string
    alt : string
}

const References = () => {
  return (
    <div className="grid grid-col-1 lg:grid-cols-2 gap-10 items-center mt-10">
        {image.map((item : imageName) => (
            <Image
                key={item.id}
                src={`/references/${item.name}.webp`}
                width={600}
                height={500}
                alt={item.alt}
                loading="lazy"
                className="object-cover rounded-lg"
            />
        ))}
    </div>
  )
}

export default References