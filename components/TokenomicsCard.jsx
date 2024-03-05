import Image from "next/image"


const TokenomicsCard = () => {
  return (
    <div className="mt-6 bg-background rounded-xl p-2 md:p-6">
        <h1 className="text-2xl font-semibold">Tokenomics</h1>
        <h2 className="text-xl font-semibold my-6">Initial Distribution</h2>
        <Image 
        src="/graphCircle.png"
        height={1000}
        width={1000}
        alt="notAvail"
        />

        <p className="my-6 text-[15px] font-medium text-[#3E424A]">Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.</p>
    </div>
  )
}

export default TokenomicsCard