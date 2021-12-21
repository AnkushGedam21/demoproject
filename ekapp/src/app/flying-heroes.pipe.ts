
import { Hero } from './Heroes.model';
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:"flyingHeroes"
})
export class FlyingHeroesPipe implements PipeTransform{
    transform(allHeroes: Hero[]) {
        return allHeroes.filter(hero => hero.canFly)
    }
}

@Pipe({
    name:"flyingHeroesImpure",
    pure:false
})
export class FlyingHeroesImpurePipe extends FlyingHeroesPipe{}