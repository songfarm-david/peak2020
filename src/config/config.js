export const MC_API_KEY = process.env.GATSBY_MC_API_KEY;
export const MC_DATA_NO = process.env.GATSBY_MC_DATA_NO;
export const MC_AUDIENCE_ID = process.env.GATSBY_MC_AUDIENCE_ID;

const envVars = [
    {name: "MC_API_KEY", value: MC_API_KEY},
    {name: "MC_DATA_NO", value: MC_DATA_NO},
    {name: "MC_AUDIENCE_ID", value: MC_AUDIENCE_ID}
]

export const checkEnvVars = () => {
    const envVarsNotLoaded = envVars.filter((envVar) => envVar.value !== undefined);
    if (envVarsNotLoaded.length > 0) {
        throw new Error(`Could not load env vars ${envVarsNotLoaded.join(",")}`);
    }
}

checkEnvVars()