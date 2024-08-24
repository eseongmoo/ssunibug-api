// app/vip/[tokenId]/route.ts
import { NextRequest, NextResponse } from 'next/server';

const NFT_METADATA: { [key: string]: any } = {
    '0': {
        name: "Bugcity VIP #0",
        description: "버그시티 VIP NFT입니다.",
        image: "https://api.ssunibug.com/vip/0.mp4",
        attributes: [
            { trait_type: "Nickname", value: "Sunny" }
        ]
    }
    // 여기에 더 많은 NFT 메타데이터를 추가할 수 있습니다.
};

export async function GET(
    request: NextRequest,
    { params }: { params: { tokenId: string } }
) {
    const tokenId = params.tokenId;

    // tokenId 유효성 검사
    if (!tokenId || !/^\d+$/.test(tokenId)) {
        return NextResponse.json(
            { error: 'Invalid token ID' },
            { status: 400 }
        );
    }

    const metadata = NFT_METADATA[tokenId];

    if (!metadata) {
        return NextResponse.json(
            { error: 'Metadata not found for this token ID' },
            { status: 404 }
        );
    }

    return NextResponse.json(metadata);
}