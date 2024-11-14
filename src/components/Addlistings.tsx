import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
  } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

const Addlistings = () => {
  return (
    <div>
        <Dialog>
  <DialogTrigger>Add property</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Add a New Listing</DialogTitle>
      <DialogDescription>
        Please fill out the form below to add a new listing.
      </DialogDescription>
      <form action="">
      <Input placeholder="Kigali, Rwanda" type="text" className="py-6" name="location" />
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Property Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="house">House</SelectItem>
                  <SelectItem value="condo">Condo</SelectItem>
                  <SelectItem value="townhouse">Townhouse</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Bedrooms" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                </SelectContent>
              </Select>
      </form>
    </DialogHeader>
    <Button variant={"outline"}>Pay Now</Button>
  </DialogContent>
  <DialogFooter>
  </DialogFooter>
</Dialog>

    </div>
  )
}

export default Addlistings