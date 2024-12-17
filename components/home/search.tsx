"use client";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useEffect, useState } from "react";
import { Job } from "@/types/job.type";
import { getJobs } from "@/services/jobService";

export const Search = () => {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getJobs();
      setJobs(data);
    };

    fetchData();
  }, []);

  return (
    <div className="relative">
      <div className="relative h-[35vh] w-full md:h-[50vh] lg:h-[65vh]">
        <Image src="/bg-craftman.jpg" alt="Craftman" layout="fill" objectFit="cover" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container grid grid-cols-3 px-4 text-white">
          <div className="col-span-2">
            <span className="text-2xl font-bold md:text-4xl lg:text-6xl">Trouvez l'artisan parfait pour vos travaux.</span>
            <div className="mt-4 flex flex-col space-y-2">
              <Input placeholder="Etablissement" className="w-full" />
              <Input placeholder="Où ?" className="w-full" />
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Spécialité" />
                </SelectTrigger>
                <SelectContent className="w-full">
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    {jobs &&
                      jobs.map(speciality => (
                        <SelectItem key={speciality.id} value={speciality.slug}>
                          {speciality.name}
                        </SelectItem>
                      ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Button className="h-full">
                <SearchIcon className="h-4 w-4" />
                <span>Rechercher</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
