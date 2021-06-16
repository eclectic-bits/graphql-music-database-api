import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();

async function main() {
    const artist = await client.artist.findUnique({
        where: {
            id: 1
        },
        include: {
            albums: true
        }
    });

    // console.log(artist);

    const albumId = artist?.albums[0].id || 1;

    const tracks = await client.track.findMany({
        where: {
            albumId: albumId
        }
    });
    console.log(tracks);

    const playlist = await client.playlist.findUnique({
        where: {
            id: 1
        },
        select: {
            name: true,
            PlaylistTrack: {
                take: 2,
                select: {
                    track: {
                        select: {
                            name: true,
                            milliseconds: true
                        }
                    }
                }
            }
        }
    });
    console.log(playlist?.PlaylistTrack);
}

main()
    .catch((exception: any) => {
        throw exception;
    })
    .finally(async () => {
        await client.$disconnect();
    });