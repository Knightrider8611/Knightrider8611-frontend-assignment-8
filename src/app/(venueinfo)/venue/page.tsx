import CardPanel from "@/components/CardPanel";
import VenueCatalog from "@/components/VenueCatalog";
import getVenues from "@/libs/getVenues";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import { VenueJson } from "interface";

export default async function Venues(){
    const venues:VenueJson = getVenues();
    return (
        <main className="text-center p-5">
            <h1 className="text-xl font-medium">Select Your Desired Venue</h1>
            {/* <CarPanel/> */}
            <Suspense fallback={<p>Loading ... <LinearProgress/></p>}>
                <VenueCatalog venuesJson={venues}/>
            </Suspense>
        </main>
    );
}