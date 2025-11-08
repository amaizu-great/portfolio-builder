
import Image from "next/image";
import { useState } from "react";
import { ImagePlus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import fileToBase64 from "@/functions/filetoBase64";
import { Separator } from "@/components/ui/separator";
import { useMediaQuery } from "@/hooks/use-media-query";
import portfolioState from "@/zustand/persit/addPortfolio";
import useLoadingState from "@/zustand/non-persist/loadingState";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs"; 
import { Dialog, DialogTitle, DialogHeader, DialogContent, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { Drawer, DrawerClose, DrawerTitle,  DrawerFooter, DrawerHeader, DrawerTrigger, DrawerContent, DrawerDescription } from "@/components/ui/drawer";

const ProfileTab = () => {
  const { isLoading } = useLoadingState();
  const { profile , setProfile} = portfolioState();

  const ProfilePhoto = () => {
    const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        const base64 = await fileToBase64(file);
        setProfile({ ...profile, profileImage: base64 });
      }
    };
  
    const showImage = profile.profileImage instanceof File || (typeof profile.profileImage === "string" && profile.profileImage !== "");

    return (
      <div className="flex flex-col gap-1 items-center">
        <p className="font-medium text-[14px]">Photo</p> 
        { showImage ?
          <Label>
            <Image src={profile.profileImage instanceof File ? URL.createObjectURL(profile.profileImage) : (profile.profileImage ?? "")} alt="profile" width={128} height={128} className="rounded-full cursor-pointer max-h-32 max-w-32"/>
            <Input type="file" accept=".png, .jpg, .jpeg" onChange={handleImageChange}  className="absolute size-full hidden" />
          </Label> 
          :
          <Label className="size-32 bg-gray-100 rounded-full flex items-center justify-center relative cursor-pointer">
            <ImagePlus size={20}/>
            <Input type="file" accept=".png, .jpg, .jpeg" onChange={handleImageChange} className="absolute size-full hidden" />
          </Label>
        }
      </div>
    )
  }

  const SocialDrawer = () => {
    const [open, setOpen] = useState(false)
    const isDesktop = useMediaQuery("(min-width: 768px)")
    if (isDesktop) {
      return (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="outline">Edit Profile</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you&apos;re
                done.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )
    }

    return (
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className="text-left">
            <DrawerTitle>Edit profile</DrawerTitle>
            <DrawerDescription>
              Make changes to your profile here. Click save when you&apos;re done.
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter className="pt-2">
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    )
  }

  return(
    <TabsContent value="profile" className="flex flex-col gap-3 py-2 px-1 sm:px-0">
      <h2 className="font-semibold text-2xl">Edit Profile</h2>

      <div className="flex flex-col gap-4 items-center md:flex-row-reverse">
        <ProfilePhoto />

        <div className="flex flex-col gap-4 w-full">
          <Label className="flex flex-col gap-2 items-start min-w-full ">
            <p className="whitespace-nowrap">First Name</p>
            <Input className="text-[14px]" disabled={isLoading} value={profile.firstName ?? ""} onChange={(e) => {setProfile({...profile, firstName: e.target.value})}}/>
          </Label>

          <Label className="flex flex-col gap-2 items-start min-w-full w-full">
            <p className="whitespace-nowrap">Last Name</p>
            <Input className="text-[14px]" disabled={isLoading} value={profile.lastName ?? ""} onChange={(e) => {setProfile({...profile, lastName: e.target.value})}}/>
          </Label>
        </div>
      </div>

      <Label className="flex flex-col gap-2 items-start min-w-full ">
        <p className="whitespace-nowrap">Email</p>
        <Input className="text-[14px]" disabled={isLoading} value={profile.email ?? ""} onChange={(e) => {setProfile({...profile, email: e.target.value})}} />
      </Label>

      <Label className="flex flex-col gap-2 items-start min-w-full ">
        <p className="whitespace-nowrap">Phone</p>
        <Input className="text-[14px]" disabled={isLoading} value={profile.phone ?? ""} onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '') }} onChange={(e) => {setProfile({...profile, phone: e.target.value})}}/>
      </Label>

      <Label className="flex flex-col gap-2 items-start min-w-full ">
        <p className="whitespace-nowrap">Location</p>
        <Input className="text-[14px]" disabled={isLoading} value={profile.location ?? ""} onChange={(e) => {setProfile({...profile, location: e.target.value})}}/>
      </Label>

      <Label className="flex flex-col gap-2 items-start min-w-full">
        <p className="whitespace-nowrap">Description</p>
        <Textarea className="h-30 text-[14px]" disabled={isLoading} value={profile.description ?? ""} onChange={(e) => {setProfile({...profile, description: e.target.value})}} />
      </Label>

      <Separator className="my-4" />

      <SocialDrawer />
      
    </TabsContent>
  )
}

const Fields = () => {
  const { isLoading } = useLoadingState();
  const { profile, about, projects, experience, testimonials, newsletter } = portfolioState()
  return (
    <div className="flex w-full min-w-1/2 overflow-y-auto scrollbar">
      <Tabs defaultValue="profile" className="overflow-hidden">
        <div className="overflow-x-scroll scrollbar overflow-y-hidden py-3">
          <TabsList >
            <TabsTrigger className="cursor-pointer" value="profile">Profile</TabsTrigger>
            <TabsTrigger className="cursor-pointer" value="about">About</TabsTrigger>
            <TabsTrigger className="cursor-pointer" value="projects">Projects</TabsTrigger>
            <TabsTrigger className="cursor-pointer" value="experience">Experience</TabsTrigger>
            <TabsTrigger className="cursor-pointer" value="testimonials">Testimonials</TabsTrigger>
            <TabsTrigger className="cursor-pointer" value="newsletter">Newsletter</TabsTrigger>
          </TabsList>
        </div>

        <div className="overflow-y-scroll scrollbar">
          <ProfileTab />
        </div>
      </Tabs>
    </div>
  )
}

export default Fields