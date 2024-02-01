import React from "react";

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ClientButton from "@/app/ui/clientButton";

export default function Home() {
  return (
      <main className="flex flex-col items-center p-1 justify-between">

          <div className="z-2 max-w-5xl w-full items-center font-mono text-sm lg:flex">

            <Stack direction="column" spacing={2}>

              <ClientButton
                  label="id = clientButton1"
                  id="clientButton1"
              ></ClientButton>

              <ClientButton
                  label="className = 'ButtonWithClassName'"
                  className={"ButtonWithClassName"}
              ></ClientButton>

              <ClientButton
                  label="ClientButton with ID" >

              </ClientButton>

              <Button variant="contained" disabled>
                Disabled
              </Button>
              <Button variant="contained" href="#contained-buttons">
                Link
              </Button>
            </Stack>
          </div>
      </main>
);
}
