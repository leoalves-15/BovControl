type farmer = {
  name: string;
  city: string;
};

type locationName = {
  name: string;
};

type location = {
  latitude: number;
  longitude: number;
};

export type task = {
  _id?: number;
  id?: number;
  type: string;
  amount_of_milk_produced: number;
  number_of_cows_head: number;
  had_supervision: boolean;
  farmer: farmer;
  from: locationName;
  to: locationName;
  location: location;
  created_at: string;
  updated_at: string;
};
