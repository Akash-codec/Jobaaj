import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import {
  Command,
  CommandInput,
  CommandItem,
  CommandGroup,
  CommandEmpty,
} from "@/components/ui/command";
import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react";
// import { cn } from "@/lib/utils";

const industryTypes = [
  "Accounting/ Finance",
  "Advertising/ PR/ MR/ Events",
  "Agriculture/ Dairy",
  "Animation",
  "Architecture/ Interior Designing",
  "Auto/ Auto Ancillary",
  "Aviation / Aerospace Firms",
  "Brewery / Distillery",
  "Ceramics / Sanitary ware",
  "Chemicals/ PetroChemical/ Plastic/ Rubber",
  "Construction/ Engineering/ Cement/ Metals",
  "Consumer Durables",
  "Courier/ Transportation/ Freight",
  "Defence/ Government",
  "Education/ Teaching/ Training",
  "Electricals / Switchgears",
  "Export/ Import",
  "Facility Management",
  "Fertilizers/ Pesticides",
  "FMCG/ Foods/ Beverage",
  "Food Processing",
  "Gems & Jewellery",
  "Glass",
  "Heat Ventilation Air Conditioning",
  "Hotels/ Restaurants/ Airlines/ Travel",
  "Industrial Products/ Heavy Machinery",
  "Insurance",
  "Internet/ Ecommerce",
  "KPO / Research / Analytics",
  "Legal",
  "Media/ Dotcom/ Entertainment",
  "Medical/ Healthcare/ Hospital",
  "Mining",
  "NGO/ Social Services",
  "Office Equipment/ Automation",
  "Oil and Gas/ Power/ Infrastructure/ Energy",
  "Pharma/ Biotech/ Clinical Research",
  "Printing/ Packaging",
  "Publishing",
  "Real Estate/ Property",
  "Recruitment",
  "Retail",
  "Security/ Law Enforcement",
  "Semiconductors/ Electronics",
  "Shipping/ Marine",
  "Steel",
  "Strategy / Management Consulting Firms",
  "Telcom/ ISP",
  "Tyres",
  "Water Treatment / Waste Management",
  "Wellness/ Fitness/ Sports",
  "Other",
  "Information Technology (IT)",
  "Banking",
  "Beauty & Personal Care",
];

export function EmployeeSignupForm({ className, ...props }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="py-2">
        <CardHeader className="text-center flex items-center justify-center rounded-t-lg bg-[#377dff]">
          <CardTitle className="text-[22px] font-semibold py-3.5 text-white">
            Please Register To Continue
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <FieldGroup>
              <Field>
                <FieldLabel
                  htmlFor="name"
                  className="font-semibold text-gray-700"
                >
                  Company Name*
                </FieldLabel>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter Your Company Name"
                  required
                />
              </Field>
              <Field>
                <FieldLabel
                  htmlFor="email"
                  className="font-semibold text-gray-700"
                >
                  Email*
                </FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </Field>
              <Field>
                <FieldLabel
                  htmlFor="phone-number"
                  className="font-semibold text-gray-700"
                >
                  Mobile Number*
                </FieldLabel>
                <Input
                  id="phone-number"
                  type="number"
                  placeholder=""
                  required
                />
              </Field>
              <Field>
                <FieldLabel
                  htmlFor="contact-person"
                  className="font-semibold text-gray-700"
                >
                  Contact Person Name
                </FieldLabel>
                <Input
                  id="contact-person"
                  type="text"
                  placeholder="Contact Person Name"
                />
              </Field>
              <Field>
                <div className="relative w-full">
                  {/* Trigger */}
                  <button
                    onClick={() => setOpen(!open)}
                    className="w-full border rounded-md px-3 py-2 flex justify-between items-center bg-white"
                  >
                    {selected || "Select Industry Type"}
                    <ChevronsUpDown className="w-4 h-4 opacity-50" />
                  </button>

                  {/* Dropdown (fixed below) */}
                  {open && (
                    <div className="absolute left-0 top-full mt-1 w-full bg-white border rounded-md shadow-lg z-50">
                      <Command>
                        {/* Search bar */}
                        <CommandInput
                          placeholder="Search industry..."
                          className="border-b"
                        />

                        <div className="max-h-50 overflow-y-auto">
                          <CommandEmpty>No industry found.</CommandEmpty>

                          <CommandGroup>
                            {industryTypes.map((item) => (
                              <CommandItem
                                key={item}
                                value={item}
                                className="cursor-pointer"
                                onSelect={() => {
                                  setSelected(item);
                                  setOpen(false);
                                }}
                              >
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    selected === item
                                      ? "opacity-100"
                                      : "opacity-0"
                                  )}
                                />
                                {item}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </div>
                      </Command>
                    </div>
                  )}
                </div>
              </Field>
              <Field>
                <FieldLabel
                  htmlFor="gstin"
                  className="font-semibold text-gray-700"
                >
                  GSTIN (Optional)
                </FieldLabel>
                <Input id="gstin" type="text" placeholder="GSTIN Number" />
                <FieldDescription>
                  By submitting this form I have read and acknowledged the <span>Privacy Policy</span> 
                </FieldDescription>
              </Field>
              <Field>
                <Button className="bg-[#377dff]" type="submit">
                  Create Account
                </Button>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
