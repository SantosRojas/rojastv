import { fetchChannels } from "./lib/data";
import RojasTv from "./rojastv/rojastv";

export default async function Page() {
  const channels = await fetchChannels()

  return (
    <RojasTv channels = {channels}/>
  );
}
