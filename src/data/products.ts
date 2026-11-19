import type { Product } from '../types';
export const products:Product[]=[
{id:'p1',slug:'chaqueta-denim-90s',name:'Chaqueta denim 90s',price:189,category:'Chaquetas',size:'M',condition:'Muy bueno',image:'photo-1544022613-e87ca75a784a',badge:'Pieza única',stock:1},
{id:'p2',slug:'camisa-rayas-retro',name:'Camisa a rayas retro',price:129,category:'Camisas',size:'L',condition:'Excelente',image:'photo-1598033129183-c4f50c736f10',badge:'Nuevo ingreso',stock:1},
{id:'p3',slug:'pantalon-sastre-oliva',name:'Pantalón sastre oliva',price:159,category:'Pantalones',size:'28',condition:'Muy bueno',image:'photo-1509631179647-0177331693ae',stock:1},
{id:'p4',slug:'polo-grafico-vintage',name:'Polo gráfico vintage',price:89,category:'Polos',size:'M',condition:'Bueno',image:'photo-1521572163474-6864f9cf17ab',stock:1}];
export const imageUrl=(id:string,width=700)=>`https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;
