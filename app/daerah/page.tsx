import Map from "@/components/daerah/map"
import Situs from "@/components/daerah/situs"
import Budaya from "@/components/daerah/budaya"
import { IslandProvider } from "@/components/daerah/island-context"

const Daerah = () => {
  return (
    <IslandProvider>
      <Map />
      <Situs />
      <Budaya />
    </IslandProvider>
  )
}

export default Daerah
