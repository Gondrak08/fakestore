Eu tenho o seguinte pai componente, com o seguinte hook:

```
export default function ProductsDisplay() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [filterType, setFilterType] = useState<string | null>(null)
  console.log(filterType)
  return (
    <section className="container flex gap-3 mx-auto w-full">
      <ProductsFilter />
      <div id="content" className="flex flex-col gap-2 w-full mx-auto">
        <div className="relative w-[16em] px-2 ">
          <button
            bg-blue-200
            id="btn-ordener"
            className="w-full flex gap-2 items-center text-blackStore px-5 py-2 border-[1px] rounded-lg "
            onClick={() => setIsOpen(!isOpen)}
          >
            <FaArrowUpShortWide className="text-[18px]" />
            <span className="text-[16px]  font-light">Ordernar</span>
          </button>
          {isOpen ? <OrderDisplay setFilter={setFilterType} /> : null}
        </div>
....
```

eu passo o hook como prop aqui:

```
          {isOpen ? <OrderDisplay setFilter={setFilterType} /> : null}
```

Eis aqui meu component filho:

```
const OrderDisplay = ({setFilterType}:{setFilterType: React.Dispatch<React.SetStateAction<string | null>>}) => {
  const orders = [
    {type:'reate', text:'Relevância'},
    {type:'byDate', text:'Mais recentes'},
    {type:'higherPrice', text:'Maio preço'},
    {type:'lowerPrice', text:'Menor preço'},
    {type:'AtoZ', text:'De A a Z'},
    {type:'ZtoA', text:'De Z a A'},
  ];

  const getOrder=({e,type, text}:any)=>{
    const value = text;
    e.preventDefault();
       setFilterType(type )
  }
  return (
    <div className="w-[15em] absolute top-12 z-30 bg-white border drop-shadow-2xl ">
      <ul className="flex flex-col   ">
        {Object.values(orders).map((order:{ type: string, text: string }, index: number) => (
          <li
            key={index}
            className="py-2 px-4 font-light text-blackStore text-[14px] hover:bg-pinkStore"
            onClick={(e:any)=> getOrder({e,...order})}
          >
            {order.text}
          </li>
        ))}
      </ul>
    </div>
  );
};
```

quando tento capturar um dos valores dentro do < li> do component filho, me retorna um erro no console:

```
TypeError: setFilterType is not a function
```

Eu estou tentando tipar o seguinte hook que estou passando como prop:

```
  const [isOpen, setIsOpen] = useState<boolean>(false);
      {isOpen && <MobileNavbar setIsOpen={setIsOpen(!isOpen)} />}
```

```
const MobileNavbar = ({
  setIsOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
```

Porém estou recebendo um erro de estlint em:

```
  {isOpen && <MobileNavbar setIsOpen={setIsOpen(!isOpen)} />}
```

a mensagem de erro é: "type void is not assinable to " React.Dispatch<React.SetStateAction<boolean>> "
