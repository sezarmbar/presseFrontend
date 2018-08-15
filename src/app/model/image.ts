export class Image{
    constructor(public id: string,
                public imageHaveMetadata: boolean,
                public imageName: string,
                public imagePath: string,
                public imageThumpPath: string,
                public imageWatermarkName: string ){}
}