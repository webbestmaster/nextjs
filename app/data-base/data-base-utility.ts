import {constants} from "node:fs";
import fileSystem from "node:fs/promises";
import path from "node:path";

import {dataBaseBackUpPathAbsolute} from "./data-base-const";

async function getHasAccessToDirectory(...args: Array<string>): Promise<boolean> {
    try {
        // eslint-disable-next-line no-bitwise
        await fileSystem.access(path.join(...args), constants.R_OK | constants.W_OK);

        return true;
        // eslint-disable-next-line no-empty
    } catch {}

    return false;
}

async function makeDirectory(...args: Array<string>): Promise<void> {
    const pathToFolder: string = path.join(...args);
    const hasAccessToDirectory = await getHasAccessToDirectory(pathToFolder);

    if (!hasAccessToDirectory) {
        await fileSystem.mkdir(pathToFolder);
    }
}

export function getPartialData<FullModelType extends Record<string, unknown>>(
    data: FullModelType,
    requiredPropertyList: Array<keyof FullModelType>
): Partial<FullModelType> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return Object.assign(
        {},
        ...requiredPropertyList.map<Record<string, FullModelType[keyof FullModelType]>>(
            (key: keyof FullModelType): Record<string, FullModelType[keyof FullModelType]> => {
                return {[key]: data[key]};
            }
        )
    );
}

/*
export function makeSimpleDataBaseCallBack(
    maybeError: Error | null,
    resolve: PromiseResolveType<null>,
    reject: PromiseResolveType<Error>
) {
    if (maybeError) {
        reject(maybeError);
        return;
    }

    resolve(null);
}


export function makePreparedQuery<ModelType>(query: CrudSearchQueryType<ModelType>): CrudSearchQueryType<ModelType> {
    const result: CrudSearchQueryType<ModelType> = {};

    Object.entries(query).forEach((partOfQuery: [string, unknown]) => {
        const [key, value] = partOfQuery;

        Object.assign<CrudSearchQueryType<ModelType>, Record<string, unknown>>(result, {[key]: value});

        const mayBeRegEx: RegExpQueryType | null = extractFromUnknown<RegExpQueryType>(value, {
            $regex: '',
            $regexFlag: '',
        });

        if (mayBeRegEx) {
            Object.assign<CrudSearchQueryType<ModelType>, Record<string, RegExp>>(result, {
                [key]: new RegExp(mayBeRegEx.$regex, mayBeRegEx.$regexFlag),
            });
        }
    });

    return result;
}
*/

export async function makeBackUpFolder(dataBaseId: string): Promise<void> {
    await makeDirectory(dataBaseBackUpPathAbsolute);
    await makeDirectory(dataBaseBackUpPathAbsolute, dataBaseId);
}
