import CardResult from "@/components/CardResult";

export default async function AboutPage() {
  const res = await fetch(
    "https://finhydroprounit1-default-rtdb.asia-southeast1.firebasedatabase.app/Monitoring.json?auth=AIzaSyCkFNQKsr_bZvnfwtw5ZuiB-Vhxr1HfjwY"
  );
  const repo = await res.json();

  return (
    <>
      <CardResult
        room={{
          ec: repo.Room3.fields.EC.doubleValue,
          suhu: repo.Room3.fields.Suhu.doubleValue,
          ph: repo.Room3.fields.pH.doubleValue,
        }}
      />
    </>
  );
}
