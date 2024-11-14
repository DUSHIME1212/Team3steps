import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "../components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"ghost"}>Log in</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <Tabs defaultValue="login" className="w-full flex flex-col p-4">
          <TabsList className="w-full h-fit">
            <TabsTrigger className="w-1/2 rounded-full p-4" value="login">Log in</TabsTrigger>
            <TabsTrigger className="w-1/2 rounded-full p-4" value="signup">Sign up</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <DialogHeader className="my-4">
              <DialogTitle>Log in</DialogTitle>
              <DialogDescription>
                Enter your credentials to log in.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div>
                <Label htmlFor="email" className="text-left">
                  Email
                </Label>
                <Input
                  id="email"
                  placeholder="example@example.com"
                  className="col-span-3 py-6"
                />
              </div>
              <div>
                <Label htmlFor="password" className="text-left">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Your password"
                  className="col-span-3 py-6"
                />
              </div>
            </div>
            <DialogFooter className="w-full">
              <Button type="submit" className="w-full p-6">Log in</Button>
            </DialogFooter>
          </TabsContent>
          <TabsContent value="signup">
            <DialogHeader className="mt-6">
              <DialogTitle>Sign up</DialogTitle>
              <DialogDescription >
                Create a new account.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-6 pt-4">
              <div className="">
                <Label htmlFor="name" className="text-left">
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  className="col-span-3 py-6"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-left mb-8">
                  Email
                </Label>
                <Input
                  id="email"
                  placeholder="example@example.com"
                  className="col-span-3 py-6"
                />
              </div>
              <div className="mb-8">
                <Label htmlFor="password" className="text-left mb-8">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Your password"
                  className="col-span-3 py-6"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" className="w-full p-6">Sign up</Button>
            </DialogFooter>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
