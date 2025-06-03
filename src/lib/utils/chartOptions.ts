import type { Clades, Diets, Locomotions } from "$lib/types/clades";

export function getCombinedChartOptions(clades: Clades, diets: Diets, locomotions: Locomotions, isDark: boolean) {
    const topClades = [...clades.data].sort((a, b) => b.count - a.count).slice(0, 3);
    const topDiets = [...diets.data].sort((a, b) => b.count - a.count).slice(0, 3);
    const topLocos = [...locomotions.data].sort((a, b) => b.count - a.count).slice(0, 4);

    const combined = [
        ...topClades.map(i => ({ label: i.clade, count: i.count, group: 'Clade' })),
        ...topDiets.map(i => ({ label: i.diet, count: i.count, group: 'Diet' })),
        ...topLocos.map(i => ({ label: i.locomotionType, count: i.count, group: 'Locomotion' })),
    ];

    return {
        chart: {
            type: 'bar',
            height: 300,
            stacked: false,
            foreColor: isDark ? '#E5E7EB' : '#1F2937', // text color
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '45%',
                distributed: true,
            }
        },
        series: [{
            name: 'Jumlah Spesies',
            data: combined.map(i => i.count)
        }],
        xaxis: {
            categories: combined.map(i => `${i.group}: ${i.label}`),
            labels: {
                rotate: -45
            }
        },
        tooltip: {
            theme: isDark ? 'dark' : 'light',
            y: {
                formatter: (val: number) => `${val} spesies`
            }
        },
        colors: combined.map(i => {
            if (i.group === 'Clade') return '#6DE1D2';
            if (i.group === 'Diet') return '#FFA07A';
            return '#A29BFE';
        })
    };
}

