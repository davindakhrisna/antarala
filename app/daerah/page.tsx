import Map from "@/components/daerah/map"
import Situs from "@/components/daerah/situs"
import Budaya from "@/components/daerah/budaya"
import Makanan from "@/components/daerah/makanan"
import Slider from "@/components/daerah/slider"
import { IslandProvider } from "@/components/daerah/island-context"

const Daerah = () => {
  return (
    <IslandProvider>
      <Map />
      <Slider />
      <Situs />
      <Budaya />
      <Makanan />
    </IslandProvider>
  )
}

export default Daerah
