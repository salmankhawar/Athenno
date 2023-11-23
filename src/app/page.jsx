import Motd from "@/components/motd"
import getMotd from "@/serverActions/getMotd"


export default async function Home() {
    const nmotd = await getMotd()
    return (
    <Motd nmotd={nmotd} />
    )
}