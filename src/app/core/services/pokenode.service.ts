import { Injectable } from '@angular/core';
import { GameClient, Generation } from 'pokenode-ts';

@Injectable({
    providedIn: 'root',
})
export class PokenodeService {
    private gameClient = new GameClient();

    async getGameGenerations(): Promise<Generation[]> {
        const resp = await this.gameClient.listGenerations();
        return Promise.all(
            resp.results.map(async (gen) => {
                const genDetails = await this.gameClient.getGenerationByName(
                    gen.name
                );
                return genDetails;
            })
        );
    }
}
