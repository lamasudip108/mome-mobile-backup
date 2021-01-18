import React from 'react';
import {StyleSheet, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const Skeleton = () => {
    return (
        <View style={styles.skeletonWrapper}>
            <SkeletonPlaceholder>
                <SkeletonPlaceholder.Item flexDirection="row">
                    <SkeletonPlaceholder.Item width={50} height={50} borderRadius={25}/>
                    <SkeletonPlaceholder.Item
                        flex={1}
                        justifyContent={'space-between'}
                        marginLeft={12}>
                        <SkeletonPlaceholder.Item
                            width="60%"
                            height={12}
                            borderRadius={6}
                        />
                        <SkeletonPlaceholder.Item
                            width="40%"
                            height={12}
                            borderRadius={6}
                        />
                        <SkeletonPlaceholder.Item
                            width="90%"
                            height={12}
                            borderRadius={6}
                        />
                    </SkeletonPlaceholder.Item>
                </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder>
        </View>
    );
};

const styles = StyleSheet.create({
    skeletonWrapper: {
        marginBottom: 12,
        backgroundColor: '#FFF',
        padding: 10,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#FFFFFF',
    },

});

export default Skeleton;
